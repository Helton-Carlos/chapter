using MinimalOne.Models;

namespace MinimalOne.Services;

public class TodoService : ITodoService
{
    private readonly List<TodoItem> _todos =
    [
        new(Guid.NewGuid(), "Aprender Minimal APIs em .NET", true),
        new(Guid.NewGuid(), "Configurar o Scalar para documentação", false)
    ];

    public IEnumerable<TodoItem> GetAll() => _todos;

    public TodoItem? GetById(Guid id) => _todos.FirstOrDefault(t => t.Id == id);

    public TodoItem Create(CreateTodoDto dto)
    {
        var newItem = new TodoItem(Guid.NewGuid(), dto.Title, false);
        _todos.Add(newItem);
        return newItem;
    }
}
