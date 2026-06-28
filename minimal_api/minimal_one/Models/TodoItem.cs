namespace MinimalOne.Models;

public record TodoItem(Guid Id, string Title, bool IsCompleted);
public record CreateTodoDto(string Title);
