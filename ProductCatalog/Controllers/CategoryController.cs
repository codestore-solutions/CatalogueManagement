using Microsoft.AspNetCore.Authorization;
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
        private readonly ILogger<CategoryController> _logger;

        public CategoryController(ICategoryService categoryService, ILogger<CategoryController> logger)
        {
            _categoryService = categoryService;
            _logger = logger;
        }


        // GET: api/<CategoryController>
        [HttpGet]
        //[Authorize(Policy = "Admin")]
        public async Task<ActionResult<ResponseDto<IEnumerable<CategoryOut>>>> GetAllCategory()
        {
            _logger.LogInformation("Inside get get all category");
            var  res = await _categoryService.GetAllCategoriesAsync();
            if (res.Value == null || !res.Value.Any())
            {
                res.StatusCode = StatusCodes.Status404NotFound;
                return NotFound(res);
            }

            return Ok(res);
        }

          // POST api/<CategoryController>
        [HttpPost]        
        public async Task<IActionResult> Post([FromBody] CategoryIn categoryIn)
        {
            _logger.LogInformation("inside post request");

            if (!ModelState.IsValid)
            {
                _logger.LogInformation($"Error in body {categoryIn}");
                return BadRequest(ModelState);
            }
            var res =  await _categoryService.AddCategory(categoryIn);
            return Ok("Category Created Successfully " + res);  // constant String
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(long id, [FromBody] Category category)
        {
            if(!ModelState.IsValid)
            {
                _logger.LogError($"Error in body {category}");
                return BadRequest(ModelState);
            }
            if (id != category.Id)
            {
                var badRes = ResponseDto.CreateErrorRespoonse(StatusCodes.Status400BadRequest, "parameter Id and body id is not same");
                return BadRequest(badRes);
            }
            var res = await _categoryService.UpdateCategory(id, category);

            return !res 
                ? NotFound("Category not found") 
                : Ok("Category Updated Successfully");

        }

       
    }
}
