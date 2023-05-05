using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class ReviewService : IReviewService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IReviewRepository _reviewRepository;

        public ReviewService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _reviewRepository = unitOfWork.ReviewRepository;
        }

        public async Task<long> AddReview(Review review)
        {
            _reviewRepository.Add(review);
            await _unitOfWork.SaveAsync();
            return review.Id;
        }

        public async Task<IEnumerable<Review>> GetAllReviewsOfProduct(long productId)
        {
            var reviews =  await _reviewRepository.GetReviewsByProductId(productId);
            return reviews;
        }
    }
}
