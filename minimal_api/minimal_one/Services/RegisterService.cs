using MinimalOne.Models;

namespace MinimalOne.Services;

public class RegisterService : IRegisterService
{
    private readonly List<RegisterRequest> _users = [];

    public RegisterResponse AddRegister(RegisterRequest request)
    {
        var exists = _users.Any(u => u.Email == request.Email);

        if (exists)
            return new RegisterResponse { Success = false, Message = "Email já cadastrado" };

        _users.Add(request);

        return new RegisterResponse
        {
            Success = true,
            Message = $"Usuário {request.Name} cadastrado com sucesso!",
            CreatedAt = DateTime.Now
        };
    }
}
