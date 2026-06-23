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
            var users = await db.Users.ToListAsync();
            return Results.Ok(users);
        });

        app.MapGet("/users/{id}", async (int id, AppDbContext db) =>
        {
            var user = await db.Users.FindAsync(id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            return Results.Ok(user);
        });

        app.MapPost("/users", async (User novoUser, AppDbContext db) =>
        {
            db.Users.Add(novoUser);
            await db.SaveChangesAsync();

            return Results.Created($"/users/{novoUser.Id}", novoUser);
        });

        app.MapPut("/users/{id}", async (int id, User userAtualizado, AppDbContext db) =>
        {
            var user = await db.Users.FindAsync(id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            user.Nome = userAtualizado.Nome;
            user.Email = userAtualizado.Email;
            user.Senha = userAtualizado.Senha;

            await db.SaveChangesAsync();

            return Results.Ok(user);
        });

        app.MapDelete("/users/{id}", async (int id, AppDbContext db) =>
        {
            var user = await db.Users.FindAsync(id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            db.Users.Remove(user);
            await db.SaveChangesAsync();

            return Results.NoContent();
        });
    }
}
