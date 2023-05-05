using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface IVarientService
    {
        Task<long> AddVarient(Varient varient);

        Task UpdateVarient(long id, Varient varient);

        Task DeleteVarient(long id);

        Task MarkVarientInactive(long id);

        Task<IEnumerable<Varient>> GetAllVarientsOfProduct(long productId);


    }
}
