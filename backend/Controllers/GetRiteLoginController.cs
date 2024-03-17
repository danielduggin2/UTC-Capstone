using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using WebApiJobSearch.Models;
using WebApiJobSearch.CustomClaims;

namespace WebApiJobSearch.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class GetRiteLoginController : ControllerBase
    {
        private readonly TodoContext _context;
        private IConfiguration _config;
        public GetRiteLoginController(IConfiguration config, TodoContext context)
        {
            _context = context;
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] GetRiteLoginDTO userLogin)
        {
            var user = Authenticate(userLogin);
            
            if (user != null)
            {
                var token = Generate(user);
                var cookieOptions = new CookieOptions
                {
                    Expires = DateTime.Now.AddMinutes(1),
                    //HttpOnly = true,
                    //Secure = true
                };
                Response.Cookies.Append("JwtToken", token, cookieOptions);
                var data = new {responseToken = token};
                return Ok(data);


            }
            return NotFound("User not found");
        }

        private string Generate(GetRiteUser user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]));
            var credentials = new SigningCredentials(securityKey,SecurityAlgorithms.HmacSha256);
            var userInfo = _context.GetRiteUsers.Select(u => new
            {
                u.Id,
                OfficeId = u.GetRitePhysician.OfficeId,
                PhysicianId = u.GetRitePhysician.Id,
                PatientId = u.GetRitePatient.Id
            }).Where(u => u.Id == user.Id).FirstOrDefault();
            var claims = new[]
            {
                new Claim(CustomClaimTypes.UserId, userInfo.Id.ToString()),
                new Claim(CustomClaimTypes.OfficeId, userInfo.OfficeId.ToString()),
                new Claim(CustomClaimTypes.PhysicianId, userInfo.PhysicianId.ToString()),
                new Claim(CustomClaimTypes.PatientId, userInfo.PatientId.ToString())
            };

            var token = new JwtSecurityToken(
                _config["JwtSettings:Issuer"],
                _config["JwtSettings:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(1),
                signingCredentials: credentials
                );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private GetRiteUser Authenticate(GetRiteLoginDTO userLogin)
        {
            var currentUser = _context.GetRiteUsers.Where(u => u.GetRiteLogin.Username == userLogin.Username && u.GetRiteLogin.Password == userLogin.Password)
                .SingleOrDefault();

            if (currentUser != null)
            {
                return currentUser;
            }
            return null;
        }

        //[HttpPost]
        //public async Task<ActionResult<TodoItemDTO>> PostTodoItem(CreateTodoItemDTO todoItemDTO)
        //{
        //    if (_context.TodoItems == null)
        //    {
        //        return Problem("Entity set 'TodoContext.TodoItems'  is null.");
        //    }

        //    var todoItem = new TodoItem
        //    {
        //        IsComplete = todoItemDTO.IsComplete,
        //        Name = todoItemDTO.Name,
        //    };

        //    _context.TodoItems.Add(todoItem);
        //    await _context.SaveChangesAsync();

        //    /*return CreatedAtAction("GetTodoItem", new { id = todoItem.Id }, todoItem);*/
        //    return CreatedAtAction(
        //        nameof(GetTodoItem),
        //        new { id = todoItem.Id },
        //        ItemToDTO(todoItem));
        //}




    }
}
