using MinimalOne.Models;

namespace MinimalOne.Services;

public interface IRegisterService
{
    Task<RegisterResponse> AddRegisterAsync(RegisterRequest request);
}
