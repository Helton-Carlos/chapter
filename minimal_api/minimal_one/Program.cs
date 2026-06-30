using MinimalOne.Endpoints;
using MinimalOne.Services;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddSingleton<ILoginService, LoginService>();
builder.Services.AddSingleton<IRegisterService, RegisterService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();
app.MapLoginEndpoints();
app.MapRegisterEndpoints();

app.Run();
