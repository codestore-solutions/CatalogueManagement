using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SubCategoryController : ControllerBase
    {
        private readonly ISubCategoryService _subCategoryService;

        public SubCategoryController(ISubCategoryService subCategoryService)
        {
            _subCategoryService = subCategoryService;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategory>>> Get()
        {
            var subCat =  await _subCategoryService.GetAllSubCategories();
            return Ok(subCat);
        }

        [HttpPost]
        public async Task<ActionResult<long>> Add(SubCategory subCategory)
        { 
            var res = await _subCategoryService.AddSubCategory(subCategory);
            return Ok(res);
        }

        [HttpGet("{categoryId}")]
        public async Task<ActionResult<SubCategory>> GetSubCategory([FromQuery] int id )
        {
            var sc = await _subCategoryService.GetSubCategoriesByCategory(id);
            return Ok(sc);
        }
    }
}
