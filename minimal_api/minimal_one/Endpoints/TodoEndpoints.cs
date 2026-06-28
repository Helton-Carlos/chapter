using Microsoft.AspNetCore.Http.HttpResults;
using MinimalOne.Models;
using MinimalOne.Services;

namespace MinimalOne.Endpoints;

public static class TodoEndpoints
{
    public static void MapTodoEndpoints(this WebApplication app)
    {
        var todoGroup = app.MapGroup("/api/todos");

        todoGroup.MapGet("/", (ITodoService service) =>
            Results.Ok(service.GetAll()));

        todoGroup.MapGet("/{id:guid}", Results<Ok<TodoItem>, NotFound> (Guid id, ITodoService service) =>
        {
            var item = service.GetById(id);
            return item is not null ? TypedResults.Ok(item) : TypedResults.NotFound();
        });

        todoGroup.MapPost("/", (CreateTodoDto dto, ITodoService service) =>
        {
            var newItem = service.Create(dto);
            return Results.Created($"/api/todos/{newItem.Id}", newItem);
        });
    }
}
