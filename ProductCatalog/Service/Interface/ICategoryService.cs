using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
        Task<Category> GetCategoryAsync(long id);
        Task AddCategory(string categoryName);
        Task DeleteCategoryAsync(long id);
        Task UpdateCategory(long id, Category category);
    }
}
