using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IAttachmentRepository : IGenericRepository<Attachment>
    {
        Task<ICollection<string>> GetAttachmentsByProductId(long id);
        Task<ICollection<string>> GetAttachmentByReviewId(long id);
    }
}
