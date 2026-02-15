using System.Net.Http;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;

var builder = WebApplication.CreateBuilder(args);

// 🔥 CORS (obrigatório pro navegador não bloquear)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();
app.UseCors();

// rota: http://localhost:5000/clima/Sao%20Paulo
app.MapGet("/clima/{cidade}", async (string cidade) =>
{
    string apiKey = "9ae387d9b0934c86afb150001262301&q";
    string url = $"https://api.weatherapi.com/v1/current.json?key={apiKey}={cidade}";

    using var client = new HttpClient();
    var json = await client.GetStringAsync(url);

    return Results.Content(json, "application/json");
});

app.Run();
