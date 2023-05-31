using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
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

        [HttpPost("addVarient")]
        public async Task<IActionResult> PostVarient(VarientIn varientIn)
        {
            var res = await _varientService.AddVarient(varientIn);
            return Ok(res);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateVarient(long id, Varient varient)
        {
            await _varientService.UpdateVarient(id, varient);
            return Ok();
        }


    }
}
