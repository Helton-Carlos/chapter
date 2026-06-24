using Microsoft.EntityFrameworkCore;
using SystemCompany.Models;
using SystemCompany.Data;

namespace SystemCompany.Routes;

public static class UserRoutes
{
    public static void MapUserRoutes(this WebApplication app)
    {
        app.MapGet("/users", async (AppDbContext db) =>
        {
            try
            {
                var users = await db.Users.ToListAsync();
                return Results.Ok(users);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao buscar usuários"
                );
            }
        });

        app.MapGet("/users/{id}", async (int id, AppDbContext db) =>
        {
            try
            {
                var user = await db.Users.FindAsync(id);

                if (user is null)
                    return Results.NotFound(new { mensagem = "Usuário não encontrado", status = 404 });

                return Results.Ok(user);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao buscar usuário"
                );
            }
        });

        app.MapPost("/users", async (User novoUser, AppDbContext db) =>
        {
            try
            {
                db.Users.Add(novoUser);
                await db.SaveChangesAsync();

                return Results.Created($"/users/{novoUser.Id}", novoUser);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao criar usuário"
                );
            }
        });

        app.MapPut("/users/{id}", async (int id, User userAtualizado, AppDbContext db) =>
        {
            try
            {
                var user = await db.Users.FindAsync(id);

                if (user is null)
                    return Results.NotFound(new { mensagem = "Usuário não encontrado", status = 404 });

                user.Nome = userAtualizado.Nome;
                user.Email = userAtualizado.Email;
                user.Senha = userAtualizado.Senha;

                await db.SaveChangesAsync();

                return Results.Ok(user);
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao atualizar usuário"
                );
            }
        });

        app.MapDelete("/users/{id}", async (int id, AppDbContext db) =>
        {
            try
            {
                var user = await db.Users.FindAsync(id);

                if (user is null)
                    return Results.NotFound(new { mensagem = "Usuário não encontrado", status = 404 });

                db.Users.Remove(user);
                await db.SaveChangesAsync();

                return Results.NoContent();
            }
            catch (Exception ex)
            {
                return Results.Problem(
                    detail: ex.Message,
                    statusCode: 500,
                    title: "Erro ao deletar usuário"
                );
            }
        });
    }
}
