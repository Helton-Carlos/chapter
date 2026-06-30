using MinimalOne.Models;
using MinimalOne.Services;

namespace MinimalOne.Endpoints;

public static class RegisterEndpoints
{
    public static void MapRegisterEndpoints(this WebApplication app)
    {
        var registerGroup = app.MapGroup("/api/register");

        registerGroup.MapPost("/", async (RegisterRequest request, IRegisterService service) =>
        {
            var result = await service.AddRegisterAsync(request);
            return result.Success
                ? Results.Created("/api/register", result)
                : Results.Conflict(result);
        });
    }
}
