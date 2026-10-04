# Sistema Bancário em Python — Desafio DIO

Projeto desenvolvido como desafio de código da trilha **Python Fundamentos para Análise de Dados / Suzano** da [Digital Innovation One (DIO)](https://www.dio.me/), no módulo de Estrutura de Dados.

## Sobre o desafio

O objetivo é evoluir um sistema bancário simples (depósito, saque e extrato) adicionando duas novas funcionalidades: cadastro de usuários e criação/listagem de contas bancárias vinculadas a esses usuários.

### Repositório de referência

Código-fonte original fornecido pela trilha, usado como ponto de partida:
[trilha-python-dio/01 - Estrutura de dados/desafio.py](https://github.com/digitalinnovationone/trilha-python-dio/blob/main/01%20-%20Estrutura%20de%20dados/desafio.py)

### Imagem de referência

Imagem de apoio ao desafio: *(adicionar aqui o link do Figma/imagem fornecido pelo expert, caso aplicável)*

## Melhorias implementadas

Em relação ao código de referência, este projeto adiciona:

- **Validação de CPF**: aceita somente CPFs com 11 dígitos numéricos.
- **Validação de campos obrigatórios** ao cadastrar usuário (nome, data de nascimento, endereço).
- **Extrato com data/hora** em cada movimentação (depósito/saque).
- **Decorator de log** (`@log_transacao`) que registra data/hora e nome de cada operação executada no console.
- **Persistência em JSON** (`dados_banco.json`): usuários e contas são salvos em disco e recarregados entre execuções.
- **Tratamento de erros de entrada**: valores não numéricos digitados em depósito/saque não derrubam o programa.
- **Mensagem amigável** quando não há contas cadastradas ao listar.

## Como executar

Requer Python 3.10+ (usa argumentos somente-posicionais `/` e somente-nomeados `*`).

```powershell
python sistema_bancario.py
```

## Funcionalidades do menu

| Opção | Ação             |
|-------|-------------------|
| `d`   | Depositar         |
| `s`   | Sacar             |
| `e`   | Exibir extrato    |
| `nu`  | Novo usuário      |
| `nc`  | Nova conta        |
| `lc`  | Listar contas     |
| `q`   | Sair              |

## Regras de negócio

- Limite de **R$ 500,00** por saque.
- Máximo de **3 saques** por sessão.
- Depósitos e saques só aceitam valores positivos.
- Uma conta só pode ser criada para um usuário já cadastrado (via CPF).

## Estrutura do arquivo de dados

Os dados são persistidos em `dados_banco.json` com o formato:

```json
{
  "usuarios": [
    { "nome": "...", "data_nascimento": "dd-mm-aaaa", "cpf": "...", "endereco": "..." }
  ],
  "contas": [
    { "agencia": "0001", "numero_conta": 1, "usuario": { ... } }
  ]
}
```

> Este arquivo não é versionado por padrão (ver `.gitignore` do projeto, se aplicável) por conter dados de execução local.

## Créditos

- Desafio e código-base: [Digital Innovation One](https://www.dio.me/) — trilha Python.
- Implementação, ajustes e melhorias: Helton Brito.
