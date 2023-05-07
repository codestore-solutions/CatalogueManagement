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
    public class AttachmentRepository : GenericRepository<Attachment>, IAttachmentRepository
    {
        private readonly ProductDbContext _dbContext;
        public AttachmentRepository(ProductDbContext dbContext) : base(dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<ICollection<string>> GetAttachmentsByProductId(long id)
        {
            var attachments = await _dbContext.Attachments.Where(x => x.ProductId == id && x.IsUploadedByAdmin).ToListAsync();
            List<String> result = new();
            foreach (var item in attachments)
            {
                result.Add(item.AttachmentURL);
            }
            return result;
        }

        public async Task<ICollection<string>> GetAttachmentByReviewId(long id)
        {
            var attachments = await _dbContext.Attachments.Where(x => x.ReviewId == id).ToListAsync();
            List<string> result = new();
            foreach (var item in attachments)
            {
                result.Add(item.AttachmentURL.ToString());
            }
            return result;
        }
    }
}
