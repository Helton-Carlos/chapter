using MinimalOne.Models;

namespace MinimalOne.Services;

public interface ILoginService
{
    LoginResponse Authenticate(LoginRequest request);
}
