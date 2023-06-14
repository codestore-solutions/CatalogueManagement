using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IProductRepository : IGenericRepository<Product>
    {
        decimal GetRating(long id);
        string GetAttachment(long id);
        Task<IEnumerable<Varient>> GetVarientsByProductId(long id);
        Task<IEnumerable<Attachment>> GetAttachmentsByProductId(long id);
        //Task<IEnumerable<Review>> GetReviewsByProductId(long id);
        Task<bool> MarkInactive(long id);

        Task<IEnumerable<Product>> GetProductByCategory(long categoryId);

        Task<IEnumerable<Product>> GetProductBySubCategory(long subCategoryId);

    }
}
