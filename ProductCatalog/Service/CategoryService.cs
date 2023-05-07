using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore.Metadata;
using Models.ProductModels;
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

        public async Task<long> AddCategory(string categoryName)
        {
            Category c = new Category()
            {
                Name = categoryName,
            };
            _categoryRepository.Add(c);
            await _unitOfWork.SaveAsync();
            return c.Id;
        }

        public Task<bool> DeleteCategoryAsync(long id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _categoryRepository.GetAllAsync();
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
