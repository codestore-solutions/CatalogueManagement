using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using ProductCatalog.DTOs;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IProductRepository _repository;

        public ProductService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.ProductRepository;
        }

        public async Task<ResponseDto<IEnumerable<ProductOverview>>> GetAll()
        {
            var query = await _repository.GetAllAsync();


            List<ProductOverview> products = new List<ProductOverview>();

            foreach (var item in query)
            {
                products.Add(new ProductOverview()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Rating = _repository.GetRating(item.Id),
                    Attachment = _repository.GetAttachment(item.Id),
                });
            }

            var res = ResponseDto<IEnumerable<ProductOverview>>.CreateSuccessResponse((int)StatusCodes.Status200OK, true, products);

            return res;
        }

        public async Task<ProductDetailDto> GetProductDetail(long id)
        {
            var product = await _repository.GetAsync(id);
            var varients = await _repository.GetVarientsByProductId(id);
            var attachments = await _repository.GetAttachmentsByProductId(id);
            //var reviews = await _repository.GetReviewsByProductId(id);

            return new ProductDetailDto()
            {
                Id = product.Id,
                Name = product.Name,
                Rating = _repository.GetRating(product.Id),
                Varients = varients,
                Attachments = attachments,
                //Reviews = reviews
            };
        }
    }
}
