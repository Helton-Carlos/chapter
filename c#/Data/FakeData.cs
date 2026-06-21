using CrudProdutos.Models;

namespace CrudProdutos.Data;

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
}