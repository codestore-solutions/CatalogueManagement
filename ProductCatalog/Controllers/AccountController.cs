using DataAccessLayer.Common;
using Microsoft.AspNetCore.Mvc;
using ProductCatalog.DTOs.Outgoing;
using ProductCatalog.DTOs;
using ProductCatalog.Service;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IAccountService _accountService;
        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("signIn")]
        public ActionResult<ResponseDto<string>> UserSignIn(SignInArgs signInArgs)
        {
            var res = _accountService.SignIn(signInArgs);
            if (string.IsNullOrEmpty(res))
            {
                return(new ResponseDto<string>()
                {
                    StatusCode = 400,
                    IsSuccess = false,
                    Value = "Invalid Login Credentials"
                });
            }
            return Ok(res);
        }
    }
}
