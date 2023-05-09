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
            return _context.Reviews.Where(x => x.ProductId == id).Average(x => x.Rating);
        }

        public string GetAttachment(long id)
        {
            return _context.Attachments.First(x => x.ProductId == id && x.IsUploadedByAdmin == true).AttachmentURL;
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
    }
}
