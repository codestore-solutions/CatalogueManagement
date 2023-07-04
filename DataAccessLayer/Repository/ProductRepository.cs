using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using Microsoft.EntityFrameworkCore;
using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Repository
{
    public class ProductRepository : GenericRepository<Product>, IProductRepository
    {
        private readonly ProductDbContext _context;
        public ProductRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _context = dbContext;
        }

        public decimal GetRating(long id)
        {

            try
            {
                var rating =  _context.Reviews.Where(x => x.ProductId == id).Average(x => x.Rating);
                return rating;
            }
            catch
            {
                return decimal.Zero;
            }
        }

        public string? GetAttachment(long id)
        {
            var attachment =  _context.Attachments.FirstOrDefault(x => x.ProductId == id && x.IsUploadedByAdmin);
            return attachment != null ? attachment.AttachmentURL : null;
        }

        public async Task<IEnumerable<Varient>> GetVarientsByProductId(long id)
        {
            var varients = await _context.Varients.Where(x => x.ProductId == id).ToListAsync();
            return varients;
        }

        public async Task<IEnumerable<Attachment>> GetAttachmentsByProductId(long id)
        {
            var attachments = await _context.Attachments.Where(x => x.ProductId == id && x.IsUploadedByAdmin).ToListAsync();
            return attachments;
        }

        public async Task<bool> MarkInactive(long id)
        {
            var product = _context.Products.FirstOrDefault(x => x.Id == id);
            if (product == null) return false;
            product.IsActive = false;
            _context.Products.Update(product);
            await _context.SaveChangesAsync(CancellationToken.None);
            return true;
        }

        public async Task<IEnumerable<Product>> GetProductByCategory(long categoryId)
        {
            return await _context.Products.Where(x => x.CategoryId == categoryId).ToListAsync();
        }

        public async Task<IEnumerable<Product>> GetProductBySubCategory(long subCategoryId)
        {
            return await _context.Products.Where(x => x.SubCategoryId == subCategoryId).ToListAsync();
        }
    }
}
