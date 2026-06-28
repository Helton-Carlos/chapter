namespace ExemploPessoas.models
{
    public class Pessoas
    {
        private string _nome = string.Empty;
        public string Nome
        {
            get
            {
                return _nome;
            }
            set
            {
                if (string.IsNullOrEmpty(value))
                {
                    throw new Exception("message");
                }

                _nome = value;
            }
        }
        public int Idade { get; set; }

        public void Saida()
        {
            Console.WriteLine($"nome: {Nome}, idade: {Idade}");
        }
    }
}
