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
            try
            {
                var produtos = await db.Produtos.ToListAsync();
                return Results.Ok(produtos);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao buscar produtos"
                );
            }
        });

        app.MapGet("/produtos/{id}", async (int id, AppDbContext db) =>
        {
            try
            {
                var produto = await db.Produtos.FindAsync(id);

                if (produto is null)
                    return Results.NotFound(new { mensagem = "Produto não encontrado", status = 404 });

                return Results.Ok(produto);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao buscar produto"
                );
            }
        });

        app.MapPost("/produtos", async (Produto novoProduto, AppDbContext db) =>
        {
            try
            {
                db.Produtos.Add(novoProduto);
                await db.SaveChangesAsync();

                return Results.Created($"/produtos/{novoProduto.Id}", novoProduto);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao criar produto"
                );
            }
        });

        app.MapPut("/produtos/{id}", async (int id, Produto produtoAtualizado, AppDbContext db) =>
        {
            try
            {
                var produto = await db.Produtos.FindAsync(id);

                if (produto is null)
                    return Results.NotFound(new { mensagem = "Produto não encontrado", status = 404 });

                produto.Nome = produtoAtualizado.Nome;
                produto.Preco = produtoAtualizado.Preco;

                await db.SaveChangesAsync();

                return Results.Ok(produto);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao atualizar produto"
                );
            }
        });

        app.MapDelete("/produtos/{id}", async (int id, AppDbContext db) =>
        {
            try
            {
                var produto = await db.Produtos.FindAsync(id);

                if (produto is null)
                    return Results.NotFound(new { mensagem = "Produto não encontrado", status = 404 });

                db.Produtos.Remove(produto);
                await db.SaveChangesAsync();

                return Results.NoContent();
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao deletar produto"
                );
            }
        });
    }
}
