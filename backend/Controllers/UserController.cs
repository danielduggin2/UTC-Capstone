using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using System.Security.Claims;
using WebApiJobSearch.Models;

namespace WebApiJobSearch.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [Authorize(Roles = "Administrator")]
        [HttpGet("Admins")]
        public IActionResult AdminsEndpoint()
        {
            var currentUser = GetCurrentUser();
            var data = new { userInfo = currentUser };

            return Ok(data);
        }

        [Authorize(Roles = "Seller")]
        [HttpGet("Sellers")]
        public IActionResult SellersEndpoint()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi {currentUser.GivenName}, you are a(n) {currentUser.Role}");
        }

        [Authorize(Roles = "Seller,Administrator")]
        [HttpGet("AdminsAndSellers")]
        public IActionResult AdminsAndSellersEndpoint()
        {
            var currentUser = GetCurrentUser();

            return Ok($"Hi {currentUser.GivenName}, you are a(n) {currentUser.Role}");
        }

        [HttpGet("Public")]
        public IActionResult Public()
        {
            string clientIpAddress = HttpContext.Connection.RemoteIpAddress.ToString();

            // Now you can use the clientIpAddress as needed
            Console.WriteLine();

            return Ok("Client IP Address: " + clientIpAddress);
            return Ok("Hi, you're on public Property");
        }

        private UserModel GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            Console.WriteLine(identity.FindFirst("TokenClaimName")?.Value);
            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new UserModel
                {
                    Username = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.NameIdentifier)?.Value,
                    EmailAddress = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Email)?.Value,
                    GivenName = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.GivenName)?.Value,
                    Surname = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Surname)?.Value,
                    Role = userClaims.FirstOrDefault(o => o.Type == ClaimTypes.Role)?.Value,
                };
            }
            return null;
        }
    }
}
