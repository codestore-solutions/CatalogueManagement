using Models.ProductModels;
using ProductCatalog.DTOs.Incoming;

namespace ProductCatalog.Service.Interface
{
    public interface IVarientService
    {
        Task<long> AddVarient(VarientIn varientIn);

        Task UpdateVarient(long id, Varient varient);

        Task DeleteVarient(long id);

        Task MarkVarientInactive(long id);

        Task<IEnumerable<Varient>> GetAllVarientsOfProduct(long productId);


    }
}
