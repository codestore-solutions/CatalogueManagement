using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductCatalog.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }


        // GET: api/<CategoryController>
        [HttpGet]
        public async Task<IEnumerable<Category>> GetAllCategory()
        {
            return await _categoryService.GetAllCategoriesAsync();
        }

        // POST api/<CategoryController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string category)
        {
            await _categoryService.AddCategory(category);
            return Ok("Category Created Successfully");
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] Category category)
        {
            if(id != category.Id)
            {
                return BadRequest();
            }
            await _categoryService.UpdateCategory(id, category);
            return Ok();

        }

       
    }
}
