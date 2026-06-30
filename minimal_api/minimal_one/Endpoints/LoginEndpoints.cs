using MinimalOne.Models;
using MinimalOne.Services;

namespace MinimalOne.Endpoints;

public static class LoginEndpoints
{
    public static void MapLoginEndpoints(this WebApplication app)
    {
        RouteGroupBuilder? loginGroup = app.MapGroup("/api/login");

        loginGroup.MapPost("/", (LoginRequest request, ILoginService service) =>
        {
            LoginResponse? result = service.Authenticate(request);
            return result.Success
                ? Results.Ok(result)
                : Results.Unauthorized();
        });
    }
}
