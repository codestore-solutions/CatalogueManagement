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

        public async Task AddCategory(string categoryName)
        {
            Category c = new Category()
            {
                Name = categoryName,
            };
            _categoryRepository.Add(c);

            await _unitOfWork.SaveAsync();
        }

        public Task DeleteCategoryAsync(long id)
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

        public async Task UpdateCategory(long id, Category category)
        {
            if (id != category.Id) return;
            var cat = await _categoryRepository.GetAsync(id);
            if(cat != null)
            {
                _categoryRepository.Update(category);
                await _unitOfWork.SaveAsync();
            }
        }
    }
}
