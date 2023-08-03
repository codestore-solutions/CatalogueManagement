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
        private readonly IVariantService _varientService;

        public VarientController(IVariantService varientService)
        {
            _varientService = varientService;
        }

        [HttpPost("addVarient")]
        public async Task<IActionResult> PostVarient(VariantIn varientIn)
        {
            var res = await _varientService.AddVariant(varientIn);
            return Ok(res);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateVarient(long id, Variant varient)
        {
            await _varientService.UpdateVariant(id, varient);
            return Ok();
        }


    }
}
