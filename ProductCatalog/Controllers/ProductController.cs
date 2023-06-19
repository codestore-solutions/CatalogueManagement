using DataAccessLayer.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [Route("api/Products")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ILogger<ProductController> _logger;


        public ProductController(IProductService productService, ILogger<ProductController> logger)
        {
            _productService = productService;
            _logger = logger;
        }




        [HttpGet("allProducts")]
        public async Task<ActionResult<ResponseDto<IEnumerable<ProductOverview>>>> Get()
        {
            var productOverviews =  await _productService.GetAll();

            return Ok(productOverviews);
        }

        [HttpGet("productDetail/{productId}")]
        public async Task<ActionResult<ProductDetailDto>> GetProductDetailAsync(long productId)
        {
            var detail = await _productService.GetProductDetail(productId);
            return Ok(detail);
        }

        [HttpGet("allProductsOfCategory/{categoryId}")]
        public async Task<ActionResult<ProductOverview>> GetProductByCategory(long categoryId)
        {
            var products = await _productService.GetAllByCategory(categoryId);
            if (products == null)
            {
                return NotFound(StringConstants.NotFoundError);
            }
            return Ok(products);
        }

        [HttpGet("allProductsOfSubCategory/{subCategoryId}")]
        public async Task<ActionResult<ProductOverview>> GetProductBySubCategory(long subCategoryId)
        {
            var products = await _productService.GetAllBySubCategory(subCategoryId);
            if (products == null)
            {
                return NotFound(StringConstants.NotFoundError);
            }
            return Ok(products);
        }

        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct(ProductIn productIn)
        {
            var id = await _productService.AddProduct(productIn);
            return Ok(id);
        }

        [HttpPost("addProductWithDetail")]
        public async Task<IActionResult> AddProductWithVarientsAndAttachment(ProductWithVarient productIn)
        {
            var id = await _productService.AddProductWithDetails(productIn);
            return Ok(id);
        }

        [HttpPost("markInactive/{id}")]
        public async Task<IActionResult> MarkProductInactive(long id)
        {
            await _productService.MarkInactive(id);
            return Ok("Product marked Inactive");
        }
    }
}
