﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.DTOs.Outgoing;
using ProductCatalog.DTOs;
using ProductCatalog.Service.Interface;
using ProductCatalog.Service;

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


        [HttpGet("allSubcategories")]
        public async Task<ActionResult<ResponseDto<IEnumerable<SubCategoryOut>>>> Get()
        {
            var subCat =  await _subCategoryService.GetAllSubCategories();
            return Ok(subCat);
        }

        [HttpPost("addSubCategory")]
        public async Task<ActionResult<long>> Add(SubCategory subCategory)
        { 
            var res = await _subCategoryService.AddSubCategory(subCategory);
            return Ok(res);
        }

        [HttpGet("byCategory/{categoryId}")]
        public async Task<ActionResult<ResponseDto<IEnumerable<SubCategoryOut>>>> GetSubCategory(long categoryId)
        {
            var sc = await _subCategoryService.GetSubCategoriesByCategory(categoryId);
            return Ok(sc);
        }

        [HttpGet("pendingSubCategories")]
        public async Task<ActionResult<ResponseDto<IEnumerable<Brand>>>> GetPendingBrands()
        {
            var subCategories = await _subCategoryService.GetPendingSubCategory();
            return Ok(subCategories);
        }

        [HttpPost("approveSubCategory/{id:long}")]
        public async Task<IActionResult> ApproveBrand(long id)
        {
            await _subCategoryService.Approve(id);
            return Ok("Approved");
        }

        [HttpPost("savePending/{id:long}")]
        public async Task<IActionResult> MarkPending(long id)
        {
            await _subCategoryService.MarkPending(id);
            return Ok("Status Changed");
        }
    }
}
