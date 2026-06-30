using MinimalOne.Models;

namespace MinimalOne.Services;

public interface ILoginService
{
    Task<LoginResponse> AuthenticateAsync(LoginRequest request);
}
