using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using WebApiJobSearch.Middleware;
using WebApiJobSearch.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var configuration = builder.Configuration;


//adding jwt 
builder.Services.AddAuthentication(x => {
    x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(x =>
   {
       x.TokenValidationParameters = new TokenValidationParameters
       {
           ValidIssuer = configuration["JwtSettings:Issuer"],
           ValidAudience = configuration["JwtSettings:Audience"],
           IssuerSigningKey = new SymmetricSecurityKey
                (Encoding.UTF8.GetBytes(configuration["JwtSettings:Key"]!)),
           ValidateIssuer = true,
           ValidateAudience = true,
           ValidateLifetime = true,
           ValidateIssuerSigningKey = true
       };
});

builder.Services.AddCors(options => {
    options.AddPolicy("reactApp", policyBuilder =>
    {
        policyBuilder.AllowAnyOrigin();
        policyBuilder.AllowAnyHeader();
        policyBuilder.AllowAnyMethod();
        //policyBuilder.WithOrigins("http://localhost:3030","https://localhost:7031")
        //    .AllowCredentials();
       


    });
});

builder.Services.AddControllers();
builder.Services.AddDbContext<TodoContext>(opt =>
    opt.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
app.UseJwtToHeaderMiddleware();
//app.Run(async context =>
//{
//    await context.Response.WriteAsync("Hello Dear Readers!");
//});

app.UseSwagger();
    app.UseSwaggerUI();


app.UseHttpsRedirection();


//user auth from jwt
app.UseAuthentication();

app.UseAuthorization();

app.UseCors("reactApp");

app.MapControllers();

app.Run();
