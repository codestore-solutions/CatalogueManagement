using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IUnitOfWork : IDisposable
    {
        IAttachmentRepository AttachmentRepository { get; }
        IBrandRepository BrandRepository { get; }
        ICategoryRepository CategoryRepository { get; }
        IProductRepository ProductRepository { get; }
        IReviewRepository ReviewRepository { get; }
        ISubCategoryRepository SubcategoryRepository { get; }
        IVariantRepository VariantRepository { get; }

        void Save();
        Task SaveAsync();
    }
}
