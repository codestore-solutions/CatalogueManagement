using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface ISubCategoryService
    {
        Task<IEnumerable<SubCategory>> GetAllSubCategories();

        Task<IEnumerable<SubCategory>> GetSubCategoriesByCategory(long categoryId);

        Task<long> AddSubCategory(SubCategory subCategory);
    }
}
