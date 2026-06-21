using SystemCompany.Models;

namespace SystemCompany.Data;

public static class FakeDatabase
{
    public static List<Produto> Produtos = new()
    {
        new Produto
        {
            Id = 1,
            Nome = "Notebook",
            Preco = 5000
        }
    };

    public static List<User> Users = new()
    {
        new User
        {
            Id = 1,
            Nome = "Admin",
            Email = "admin@email.com",
            Senha = "123456"
        }
    };
}