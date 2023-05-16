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

        [HttpPost]
        public async Task<IActionResult> PostBrand(BrandIn brand)
        {
            var res = await _brandService.AddNewBrand(brand);
            return Ok("Brand Created Successfully " + res);
        }

        [HttpGet]
        public async Task<ActionResult<ResponseDto<IEnumerable<Brand>>>> GetAllBrand()
        {
            var brands = await _brandService.GetAllBrands();
            return Ok(brands);
        }

        [HttpPut("{brandId}")]
        public async Task<IActionResult> UpdateBrand(long brandId, Brand brand)
        {
            if(brand.Id !=  brandId)
            {
                return BadRequest("Id does not Match!!");
            }
            var res = await _brandService.UpdateBrand(brandId, brand);
            return !res ?
                NotFound("Brand Not found") : 
                Ok("Brand Updated Successfully");
        }

        [HttpDelete("{brandId}")]
        public async Task<IActionResult> DeleteBrand(long brandId)
        {
            var res = await _brandService.DeleteBrand(brandId);
            return !res ? NotFound("Brand Not Found") : Ok("Brand Deleted Successfully");
        }

        [HttpGet("{brandId}")]
        public async Task<ActionResult<ResponseDto<IEnumerable<ProductOverview>>>> GetAllProductsOfBrand(long brandId)
        {
            var products = await _brandService.GetProductsByBrand(brandId);
            return Ok(products);
        }
    }
}
