using MinimalOne.Models;

namespace MinimalOne.Services;

public interface ITodoService
{
    IEnumerable<TodoItem> GetAll();
    TodoItem? GetById(Guid id);
    TodoItem Create(CreateTodoDto dto);
}
