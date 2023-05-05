using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.Service.Interface;

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
        public async Task<ActionResult<ProductOverview>> Get()
        {
            var productOverviews =  await _productService.GetAll();

            return Ok(productOverviews);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDetailDto>> GetProductDetailAsync(long id)
        {
            var detail = await _productService.GetProductDetail(id);
            return Ok(detail);
        }

    }
}
