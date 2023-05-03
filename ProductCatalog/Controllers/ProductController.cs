using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.Service;

namespace ProductCatalog.Controllers
{
    [Route("api/products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDto>>> Get()
        {
            var pDto =  await _productService.GetAll();
            return Ok(pDto);
        }

    }
}
