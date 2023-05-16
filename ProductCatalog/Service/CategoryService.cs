using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore.Metadata;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.DTOs.Outgoing;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class CategoryService : ICategoryService
    {
        private IUnitOfWork _unitOfWork;
        private ICategoryRepository _categoryRepository;


        public CategoryService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _categoryRepository = unitOfWork.CategoryRepository;
        }

        public async Task<long> AddCategory(CategoryIn category)
        {
            Category c = new()
            {
                Name = category.Name,
            };
            _categoryRepository.Add(c);
            await _unitOfWork.SaveAsync();
            return c.Id;
        }

        public Task<bool> DeleteCategoryAsync(long id)
        {
            throw new NotImplementedException();
        }

        public async Task<ResponseDto<IEnumerable<CategoryOut>>> GetAllCategoriesAsync()
        {
            var categories =  await _categoryRepository.GetAllAsync();
            var categoriesOutoging = Mapper.Mapper.CategoryToCategoryOut(categories);
            var res = ResponseDto<IEnumerable<CategoryOut>>.CreateSuccessResponse((int)StatusCodes.Status200OK, true, categoriesOutoging);
            return res;
            
        }

        public Task<Category> GetCategoryAsync(long id)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> UpdateCategory(long id, Category category)
        {
            var cat = await _categoryRepository.GetAsync(id);
            if(cat != null)
            {
                _categoryRepository.Update(cat);
                await _unitOfWork.SaveAsync();
                return true;
            }
            return false;
        }
    }
}
