using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.DTOs.Outgoing;

namespace ProductCatalog.Service.Interface
{
    public interface ICategoryService
    {
        Task<ResponseDto<IEnumerable<CategoryOut>>> GetAllCategoriesAsync();
        Task<Category> GetCategoryAsync(long id);
        Task<long> AddCategory(CategoryIn categoryName);
        Task<bool> DeleteCategoryAsync(long id);
        Task<bool> UpdateCategory(long id, Category category);
        Task<ResponseDto> GetPendingCategories();
        Task Approve(long id);
        Task MarkPending(long id);

    }
}
