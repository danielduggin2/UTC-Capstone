using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NuGet.Common;
using System.Security.Claims;
using WebApiJobSearch.Models;
using WebApiJobSearch.CustomClaims;

namespace WebApiJobSearch.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [Authorize]
        [HttpGet("Admins")]
        public IActionResult AdminsEndpoint()
        {
            var currentUser = GetCurrentUser();
            var data = new { userInfo = currentUser };

            return Ok(data);
        }

        public JwtUserInfo GetCurrentUser()
        {
            var identity = HttpContext.User.Identity as ClaimsIdentity;
            Console.WriteLine(identity.FindFirst("TokenClaimName")?.Value);
            if (identity != null)
            {
                var userClaims = identity.Claims;

                return new JwtUserInfo
                {
                    UserId = userClaims.FirstOrDefault(o => o.Type == CustomClaimTypes.UserId)?.Value,
                    OfficeId = userClaims.FirstOrDefault(o => o.Type == CustomClaimTypes.OfficeId)?.Value,
                    PhysicianId = userClaims.FirstOrDefault(o => o.Type == CustomClaimTypes.PhysicianId)?.Value,
                    PatientId = userClaims.FirstOrDefault(o => o.Type == CustomClaimTypes.PatientId)?.Value,
                };
            }
            return null;
        }
    }
}
