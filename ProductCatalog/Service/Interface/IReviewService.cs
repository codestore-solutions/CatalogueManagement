using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface IReviewService
    {
        Task<long> AddReview(Review review);

        Task<IEnumerable<Review>> GetAllReviewsOfProduct(long productId);


    }
}
