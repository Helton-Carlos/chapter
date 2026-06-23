using Microsoft.EntityFrameworkCore;
using SystemCompany.Models;
using SystemCompany.Data;

namespace SystemCompany.Routes;

public static class ProdutoRoutes
{
    public static void MapProdutoRoutes(this WebApplication app)
    {
        app.MapGet("/produtos", async (AppDbContext db) =>
        {
            var produtos = await db.Produtos.ToListAsync();
            return Results.Ok(produtos);
        });

        app.MapGet("/produtos/{id}", async (int id, AppDbContext db) =>
        {
            var produto = await db.Produtos.FindAsync(id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            return Results.Ok(produto);
        });

        app.MapPost("/produtos", async (Produto novoProduto, AppDbContext db) =>
        {
            db.Produtos.Add(novoProduto);
            await db.SaveChangesAsync();

            return Results.Created($"/produtos/{novoProduto.Id}", novoProduto);
        });

        app.MapPut("/produtos/{id}", async (int id, Produto produtoAtualizado, AppDbContext db) =>
        {
            var produto = await db.Produtos.FindAsync(id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            produto.Nome = produtoAtualizado.Nome;
            produto.Preco = produtoAtualizado.Preco;

            await db.SaveChangesAsync();

            return Results.Ok(produto);
        });

        app.MapDelete("/produtos/{id}", async (int id, AppDbContext db) =>
        {
            var produto = await db.Produtos.FindAsync(id);

            if (produto is null)
                return Results.NotFound(new { mensagem = "Produto não encontrado" });

            db.Produtos.Remove(produto);
            await db.SaveChangesAsync();

            return Results.NoContent();
        });
    }
}
