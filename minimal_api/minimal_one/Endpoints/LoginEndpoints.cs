using MinimalOne.Models;
using MinimalOne.Services;

namespace MinimalOne.Endpoints;

public static class LoginEndpoints
{
    public static void MapLoginEndpoints(this WebApplication app)
    {
        var loginGroup = app.MapGroup("/api/login");

        loginGroup.MapPost("/", async (LoginRequest request, ILoginService service) =>
        {
            var result = await service.AuthenticateAsync(request);

            return result.Success
                ? Results.Ok(result)
                : Results.Unauthorized();
        });
    }
}
