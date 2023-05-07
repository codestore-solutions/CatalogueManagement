using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs;
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
        public async Task<IActionResult> PostBrand(string brandName)
        {
            await _brandService.AddNewBrand(brandName);
            return Ok("Brand Created Successfully");
        }

        [HttpGet]
        public async Task<ActionResult<Brand>> GetAllBrand()
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
        public async Task<ActionResult<ProductOverview>> GetAllProductsOfBrand(long brandId)
        {
            var products = await _brandService.GetProductsByBrand(brandId);
            return Ok(products);
        }
    }
}
