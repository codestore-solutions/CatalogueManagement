using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
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
        public async Task<ActionResult<ResponseDto<IEnumerable<ProductOverview>>>> Get()
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

        [HttpPost]
        public async Task<IActionResult> AddProduct(ProductIn productIn)
        {
            var id = await _productService.AddProduct(productIn);
            return Ok(id);
        }

        [HttpPost("api/product/markInactive/{id}")]
        public async Task<IActionResult> MarkProductInactive(long id)
        {
            await _productService.MarkInactive(id);
            return Ok("Product marked Inactive");
        }
    }
}
