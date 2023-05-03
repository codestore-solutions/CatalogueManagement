using DataAccessLayer.Data;
using ProductCatalog.DTOs;

namespace ProductCatalog.Service
{
    public class ProductService : IProductService
    {
        private readonly ProductDbContext _dbContext;

        public ProductService(ProductDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ProductDto>> GetAll()
        {
            var query =
                from product in _dbContext.Products
                where product.IsActive == true
                select product;
            
            Console.WriteLine(query);

            List<ProductDto> productDtos = new List<ProductDto>();
            foreach (var item in query)
            {
                productDtos.Add(new ProductDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    CategoryName = _dbContext.Categories.First(x => x.Id == item.CategoryId).Name,
                    SubCategoryName = _dbContext.SubCatagories.First(x => x.Id == item.SubCategoryId).Name,
                    BrandName = _dbContext.Brands.First(x => x.Id == item.BrandId).Name,
                    SellerName = _dbContext.Sellers.First(x => x.Id == item.SellerId).Name,
                    Rating = _dbContext.Reviews.Where(x => x.ProductId == item.Id).ToArray().Average(x => x.Rating),
                    Varients = _dbContext.Varients.Where(v => v.ProductId == item.Id).ToList(),
                    Attachments = _dbContext.Attachments.Where(a => a.ProductId == item.Id).ToList(),
                    Reviews = _dbContext.Reviews.Where(r => r.ProductId == item.Id).ToList(),                   

                });
            }
            return productDtos;
        }
    }
}
