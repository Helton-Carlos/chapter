using MinimalOne.Models;

namespace MinimalOne.Services;

public interface IRegisterService
{
    RegisterResponse AddRegister(RegisterRequest request);
}