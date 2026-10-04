import json
import os
import textwrap
from datetime import datetime
from functools import wraps

ARQUIVO_DADOS = os.path.join(os.path.dirname(__file__), "dados_banco.json")
LIMITE_SAQUES = 3
AGENCIA = "0001"


def log_transacao(func):
    @wraps(func)
    def envelope(*args, **kwargs):
        resultado = func(*args, **kwargs)
        agora = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        print(f"[LOG] {agora} - Operação executada: {func.__name__.upper()}")
        return resultado

    return envelope


def carregar_dados():
    if os.path.exists(ARQUIVO_DADOS):
        with open(ARQUIVO_DADOS, "r", encoding="utf-8") as arquivo:
            dados = json.load(arquivo)
            return dados.get("usuarios", []), dados.get("contas", [])
    return [], []


def salvar_dados(usuarios, contas):
    with open(ARQUIVO_DADOS, "w", encoding="utf-8") as arquivo:
        json.dump({"usuarios": usuarios, "contas": contas}, arquivo, indent=4, ensure_ascii=False)


def menu():
    menu_texto = """\n
    ================ MENU ================
    [d]\tDepositar
    [s]\tSacar
    [e]\tExtrato
    [nc]\tNova conta
    [lc]\tListar contas
    [nu]\tNovo usuário
    [q]\tSair
    => """
    return input(textwrap.dedent(menu_texto)).strip().lower()


@log_transacao
def depositar(saldo, valor, extrato, /):
    if valor > 0:
        saldo += valor
        data_hora = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        extrato += f"[{data_hora}] Depósito:\tR$ {valor:.2f}\n"
        print("\n=== Depósito realizado com sucesso! ===")
    else:
        print("\n@@@ Operação falhou! O valor informado é inválido. @@@")

    return saldo, extrato


@log_transacao
def sacar(*, saldo, valor, extrato, limite, numero_saques, limite_saques):
    excedeu_saldo = valor > saldo
    excedeu_limite = valor > limite
    excedeu_saques = numero_saques >= limite_saques

    if excedeu_saldo:
        print("\n@@@ Operação falhou! Você não tem saldo suficiente. @@@")

    elif excedeu_limite:
        print("\n@@@ Operação falhou! O valor do saque excede o limite. @@@")

    elif excedeu_saques:
        print("\n@@@ Operação falhou! Número máximo de saques excedido. @@@")

    elif valor > 0:
        saldo -= valor
        data_hora = datetime.now().strftime("%d-%m-%Y %H:%M:%S")
        extrato += f"[{data_hora}] Saque:\t\tR$ {valor:.2f}\n"
        numero_saques += 1
        print("\n=== Saque realizado com sucesso! ===")

    else:
        print("\n@@@ Operação falhou! O valor informado é inválido. @@@")

    return saldo, extrato, numero_saques


def exibir_extrato(saldo, /, *, extrato):
    print("\n================ EXTRATO ================")
    print("Não foram realizadas movimentações." if not extrato else extrato)
    print(f"\nSaldo:\t\tR$ {saldo:.2f}")
    print("==========================================")


def cpf_valido(cpf):
    return cpf.isdigit() and len(cpf) == 11


@log_transacao
def criar_usuario(usuarios):
    cpf = input("Informe o CPF (somente número): ").strip()

    if not cpf_valido(cpf):
        print("\n@@@ CPF inválido! Informe somente os 11 números do CPF. @@@")
        return

    usuario = filtrar_usuario(cpf, usuarios)

    if usuario:
        print("\n@@@ Já existe usuário com esse CPF! @@@")
        return

    nome = input("Informe o nome completo: ").strip()
    data_nascimento = input("Informe a data de nascimento (dd-mm-aaaa): ").strip()
    endereco = input("Informe o endereço (logradouro, nro - bairro - cidade/sigla estado): ").strip()

    if not nome or not data_nascimento or not endereco:
        print("\n@@@ Todos os campos são obrigatórios! Usuário não criado. @@@")
        return

    usuarios.append({"nome": nome, "data_nascimento": data_nascimento, "cpf": cpf, "endereco": endereco})

    print("=== Usuário criado com sucesso! ===")


def filtrar_usuario(cpf, usuarios):
    usuarios_filtrados = [usuario for usuario in usuarios if usuario["cpf"] == cpf]
    return usuarios_filtrados[0] if usuarios_filtrados else None


@log_transacao
def criar_conta(agencia, numero_conta, usuarios):
    cpf = input("Informe o CPF do usuário: ").strip()
    usuario = filtrar_usuario(cpf, usuarios)

    if usuario:
        print("\n=== Conta criada com sucesso! ===")
        return {"agencia": agencia, "numero_conta": numero_conta, "usuario": usuario}

    print("\n@@@ Usuário não encontrado, fluxo de criação de conta encerrado! @@@")
    return None


def listar_contas(contas):
    if not contas:
        print("\n@@@ Não há contas cadastradas. @@@")
        return

    for conta in contas:
        linha = f"""\
            Agência:\t{conta['agencia']}
            C/C:\t\t{conta['numero_conta']}
            Titular:\t{conta['usuario']['nome']}
        """
        print("=" * 100)
        print(textwrap.dedent(linha))


def ler_valor_float(mensagem):
    try:
        return float(input(mensagem))
    except ValueError:
        print("\n@@@ Valor inválido! Informe um número. @@@")
        return None


def main():
    saldo = 0
    limite = 500
    extrato = ""
    numero_saques = 0

    usuarios, contas = carregar_dados()

    try:
        while True:
            opcao = menu()

            if opcao == "d":
                valor = ler_valor_float("Informe o valor do depósito: ")
                if valor is not None:
                    saldo, extrato = depositar(saldo, valor, extrato)

            elif opcao == "s":
                valor = ler_valor_float("Informe o valor do saque: ")
                if valor is not None:
                    saldo, extrato, numero_saques = sacar(
                        saldo=saldo,
                        valor=valor,
                        extrato=extrato,
                        limite=limite,
                        numero_saques=numero_saques,
                        limite_saques=LIMITE_SAQUES,
                    )

            elif opcao == "e":
                exibir_extrato(saldo, extrato=extrato)

            elif opcao == "nu":
                criar_usuario(usuarios)
                salvar_dados(usuarios, contas)

            elif opcao == "nc":
                numero_conta = len(contas) + 1
                conta = criar_conta(AGENCIA, numero_conta, usuarios)

                if conta:
                    contas.append(conta)
                    salvar_dados(usuarios, contas)

            elif opcao == "lc":
                listar_contas(contas)

            elif opcao == "q":
                salvar_dados(usuarios, contas)
                print("\nAté logo!")
                break

            else:
                print("Operação inválida, por favor selecione novamente a operação desejada.")
    except KeyboardInterrupt:
        salvar_dados(usuarios, contas)
        print("\n\nPrograma interrompido. Dados salvos.")


if __name__ == "__main__":
    main()
