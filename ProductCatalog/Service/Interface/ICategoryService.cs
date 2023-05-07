using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<Category> GetCategoryAsync(long id);
        Task<long> AddCategory(string categoryName);
        Task<bool> DeleteCategoryAsync(long id);
        Task<bool> UpdateCategory(long id, Category category);
    }
}
