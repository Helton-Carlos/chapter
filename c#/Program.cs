using CrudProdutos.Models;
using CrudProdutos.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

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

app.Run();