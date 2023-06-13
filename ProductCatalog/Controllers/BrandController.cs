using DataAccessLayer.Common;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandService _brandService;

        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="brandIn"></param>
        /// <returns></returns>
        [HttpPost("addBrand")]
        public async Task<IActionResult> PostBrand(BrandIn brandIn)
        {
            var res = await _brandService.AddNewBrand(brandIn);
            return Ok(StringConstants.CreatedSuccess + " id " + res);
        }   

        [HttpGet("allBrands")]
        public async Task<ActionResult<ResponseDto<IEnumerable<Brand>>>> GetAllBrand()
        {
            var brands = await _brandService.GetAllBrands();
            return Ok(brands);
        }

        [HttpPut("update/{brandId}")]
        public async Task<IActionResult> UpdateBrand(long brandId, Brand brand)
        {
            if(brand.Id !=  brandId)
            {
                return BadRequest(StringConstants.BadRequestError);
            }
            var res = await _brandService.UpdateBrand(brandId, brand);
            return !res ?
                NotFound(StringConstants.NotFoundError) : 
                Ok(StringConstants.UpdatedSuccess);
        }

        [HttpDelete("delete/{brandId}")]
        public async Task<IActionResult> DeleteBrand(long brandId)
        {
            var res = await _brandService.DeleteBrand(brandId);
            return !res ? NotFound(StringConstants.NotFoundError) : Ok(StringConstants.UpdatedSuccess);
        }

        [HttpGet("allProductOfBrand/{brandId}")]
        public async Task<ActionResult<ResponseDto<IEnumerable<ProductOverview>>>> GetAllProductsOfBrand(long brandId)
        {
            var products = await _brandService.GetProductsByBrand(brandId);
            return Ok(products);
        }
    }
}
