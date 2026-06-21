using SystemCompany.Models;
using SystemCompany.Data;

namespace SystemCompany.Routes;

public static class ProdutoRoutes
{
    public static void MapProdutoRoutes(this WebApplication app)
    {
        app.MapGet("/produtos", () =>
        {
            return Results.Ok(FakeDatabase.Produtos);
        });

        app.MapGet("/produtos/{id}", (int id) =>
        {
            var produto = FakeDatabase.Produtos.FirstOrDefault(p => p.Id == id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            return Results.Ok(produto);
        });

        app.MapPost("/produtos", (Produto novoProduto) =>
        {
            novoProduto.Id = FakeDatabase.Produtos.Any()
                ? FakeDatabase.Produtos.Max(p => p.Id) + 1
                : 1;

            FakeDatabase.Produtos.Add(novoProduto);

            return Results.Created($"/produtos/{novoProduto.Id}", novoProduto);
        });

        app.MapPut("/produtos/{id}", (int id, Produto produtoAtualizado) =>
        {
            var produto = FakeDatabase.Produtos.FirstOrDefault(p => p.Id == id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            produto.Nome = produtoAtualizado.Nome;
            produto.Preco = produtoAtualizado.Preco;

            return Results.Ok(produto);
        });

        app.MapDelete("/produtos/{id}", (int id) =>
        {
            var produto = FakeDatabase.Produtos.FirstOrDefault(p => p.Id == id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            FakeDatabase.Produtos.Remove(produto);

            return Results.NoContent();
        });
    }
}
