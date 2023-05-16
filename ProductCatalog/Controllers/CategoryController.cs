using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.DTOs.Outgoing;
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
        public async Task<ActionResult<ResponseDto<IEnumerable<CategoryOut>>>> GetAllCategory()
        {
            var  res = await _categoryService.GetAllCategoriesAsync();
            return Ok(res);
        }

          // POST api/<CategoryController>
        [HttpPost]
        
        public async Task<IActionResult> Post([FromBody] CategoryIn category)
        {

            var res =  await _categoryService.AddCategory(category);
            return Ok("Category Created Successfully " + res);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] Category category)
        {
            if(id != category.Id)
            {
                return BadRequest();
            }
            var res = await _categoryService.UpdateCategory(id, category);

            return !res 
                ? NotFound("Category not found") 
                : Ok("Category Updated Successfully");

        }

       
    }
}
