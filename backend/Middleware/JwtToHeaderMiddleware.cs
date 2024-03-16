
using Microsoft.AspNetCore.Http;
using NuGet.Common;
using System.Net.Http;

namespace WebApiJobSearch.Middleware
{
    public class JwtToHeaderMiddleware
    {
        private readonly RequestDelegate _next;
        public JwtToHeaderMiddleware(RequestDelegate next) { 
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            //var cookies = context.Request.Cookies;

            //// Iterate over each cookie and print its name and value
            //foreach (var cookie in cookies)
            //{
            //    string cookieName = cookie.Key;
            //    string cookieValue = cookie.Value;
            //    // Print cookie name and value
            //    Console.WriteLine($"Cookie: {cookieName}, Value: {cookieValue}");
            //}

            //var jwtToken = context.Request.Cookies["JwtToken"];

            //if (!string.IsNullOrEmpty(jwtToken))
            //{
            //    context.Request.Headers["Authorization"] = $"Bearer {jwtToken}";
            //}
            //Console.WriteLine(jwtToken);
            //Console.WriteLine("Token^");
            //await context.Response.WriteAsync("Hello Readers, this is from Custom Middleware...");
            await _next(context);

            //await context.Response.WriteAsync("Hello Readers, this is from Custom Middleware...");
        }
    }
    public static class JwtToHeaderMiddlewareExtensions
    {
        public static IApplicationBuilder UseJwtToHeaderMiddleware(this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<JwtToHeaderMiddleware>();
        }
    }
}
