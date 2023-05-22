using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VarientController : ControllerBase
    {
        private readonly IVarientService _varientService;

        public VarientController(IVarientService varientService)
        {
            _varientService = varientService;
        }

        [HttpPost]
        public async Task<IActionResult> PostVarient(VarientIn varientIn)
        {
            var res = await _varientService.AddVarient(varientIn);
            return Ok(res);
        }


    }
}
