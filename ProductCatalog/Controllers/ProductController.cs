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



        /// <summary>
        /// Gets list of all products
        /// </summary>
        /// <returns></returns>
        [HttpGet("allProducts")]
        public async Task<ActionResult<ResponseDto<IEnumerable<ProductOverview>>>> Get()
        {
            var productOverviews =  await _productService.GetAll();

            return Ok(productOverviews);
        }

        /// <summary>
        /// Get details of specific product
        /// </summary>
        /// <param name="productId">Id of product</param>
        /// <returns></returns>
        [HttpGet("productDetail/{productId}")]
        public async Task<ActionResult<ProductDetailDto>> GetProductDetailAsync(long productId)
        {
            var productDetails = await _productService.GetProductDetail(productId);
            if(productDetails == null)
            {
                return NoContent();
            }
            return productDetails;
        }

        /// <summary>
        /// Get lists of products by category
        /// </summary>
        /// <param name="categoryId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Get lists of products by sub-category
        /// </summary>
        /// <param name="subCategoryId"></param>
        /// <returns></returns>
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

        /// <summary>
        /// Add a product
        /// </summary>
        /// <param name="productIn"></param>
        /// <returns></returns>
        [HttpPost("addProduct")]
        public async Task<IActionResult> AddProduct(ProductIn productIn)
        {
            var id = await _productService.AddProduct(productIn);
            return Ok(id);
        }

        /// <summary>
        /// Add product with its variants
        /// </summary>
        /// <param name="productIn"></param>
        /// <returns></returns>
        [HttpPost("addProductWithDetail")]
        public async Task<IActionResult> AddProductWithVariantsAndAttachment(ProductWithVariant productIn)
        {
            var id = await _productService.AddProductWithDetails(productIn);
            return Ok(id);
        }

        /// <summary>
        /// Mark product as inactive
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost("markInactive/{id}")]
        public async Task<IActionResult> MarkProductInactive(long id)
        {
            await _productService.MarkInactive(id);
            return Ok("Product marked Inactive");
        }
    }
}
