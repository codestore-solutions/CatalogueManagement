using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ProductDbContext _context;
        private IAttachmentRepository? _attachmentRepository;
        private IBrandRepository? _brandRepository;
        private ICategoryRepository? _categoryRepository;
        private IProductRepository? _productRepository;
        private IReviewRepository? _reviewRepository;
        private ISubCategoryRepository? _subCategoryRepository;
        private IVariantRepository? _varientRepository;

        public UnitOfWork(ProductDbContext context) => _context = context;

        public IAttachmentRepository AttachmentRepository => _attachmentRepository ??= new AttachmentRepository(_context);

        public IBrandRepository BrandRepository => _brandRepository ??= new BrandRepository(_context);

        public ICategoryRepository CategoryRepository => _categoryRepository ??= new CategoryRepository(_context);

        public IProductRepository ProductRepository => _productRepository ??= new ProductRepository(_context);

        public IReviewRepository ReviewRepository => _reviewRepository ??= new ReviewRepository(_context);

        public ISubCategoryRepository SubcategoryRepository => _subCategoryRepository ??= new SubCategoryRepository(_context);

        public IVariantRepository VariantRepository => _varientRepository ??= new VarientRepository(_context);

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync(CancellationToken.None);
        }
    }
}
