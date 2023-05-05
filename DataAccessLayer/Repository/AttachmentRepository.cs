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

        public async Task<ICollection<Attachment>> GetAttachmentsByProductId(long id)
        {
            return await _dbContext.Attachments.Where(x => x.ProductId == id && x.IsUploadedByAdmin).ToListAsync();
        }
    }
}
