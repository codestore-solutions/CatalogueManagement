using Models.ProductModels;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service.Interface
{
    public interface IBrandService
    {
        Task<IEnumerable<Brand>> GetAllBrands();
        Task<IEnumerable<ProductOverview>> GetProductsByBrand(long id);
        Task AddNewBrand(Brand brand);
        Task UpdateBrand(long id, Brand brand);
        Task DeleteBrand(long id);

    }
}
