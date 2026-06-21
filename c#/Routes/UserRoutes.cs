using CrudProdutos.Models;
using CrudProdutos.Data;

namespace CrudProdutos.Routes;

public static class UserRoutes
{
    public static void MapUserRoutes(this WebApplication app)
    {
        app.MapGet("/users", () =>
        {
            return Results.Ok(FakeDatabase.Users);
        });

        app.MapGet("/users/{id}", (int id) =>
        {
            var user = FakeDatabase.Users.FirstOrDefault(u => u.Id == id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            return Results.Ok(user);
        });

        app.MapPost("/users", (User novoUser) =>
        {
            novoUser.Id = FakeDatabase.Users.Any()
                ? FakeDatabase.Users.Max(u => u.Id) + 1
                : 1;

            FakeDatabase.Users.Add(novoUser);

            return Results.Created($"/users/{novoUser.Id}", novoUser);
        });

        app.MapPut("/users/{id}", (int id, User userAtualizado) =>
        {
            var user = FakeDatabase.Users.FirstOrDefault(u => u.Id == id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            user.Nome = userAtualizado.Nome;
            user.Email = userAtualizado.Email;
            user.Senha = userAtualizado.Senha;

            return Results.Ok(user);
        });

        app.MapDelete("/users/{id}", (int id) =>
        {
            var user = FakeDatabase.Users.FirstOrDefault(u => u.Id == id);

            if (user is null)
                return Results.NotFound(new { mensagem = "Usuário não encontrado" });

            FakeDatabase.Users.Remove(user);

            return Results.NoContent();
        });
    }
}
