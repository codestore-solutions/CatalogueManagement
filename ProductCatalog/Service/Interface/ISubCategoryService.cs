using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Outgoing;

namespace ProductCatalog.Service.Interface
{
    public interface ISubCategoryService
    {
        Task<ResponseDto<IEnumerable<SubCategoryOut>>> GetAllSubCategories();

        Task<ResponseDto<IEnumerable<SubCategoryOut>>> GetSubCategoriesByCategory(long categoryId);

        Task<long> AddSubCategory(SubCategory subCategory);
    }
}
