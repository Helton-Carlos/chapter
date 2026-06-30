using MinimalOne.Models;

namespace MinimalOne.Services;

public class LoginService : ILoginService
{
    private readonly List<LoginRequest> _users =
    [
        new() { Name = "admin", Password = "123456" },
        new() { Name = "helton", Password = "senha123" }
    ];

    public async Task<LoginResponse> AuthenticateAsync(LoginRequest request)
    {
        await Task.CompletedTask;

        var user = _users.FirstOrDefault(u =>
            u.Name == request.Name && u.Password == request.Password);

        if (user is null)
            return new LoginResponse { Success = false, Message = "Usuário ou senha inválidos" };

        return new LoginResponse
        {
            Success = true,
            Message = $"Bem-vindo, {user.Name}!",
            Name = user.Name,
            Email = "helton@gmail.com"
        };
    }
}
