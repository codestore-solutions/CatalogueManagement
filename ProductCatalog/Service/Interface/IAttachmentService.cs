﻿using DataAccessLayer.Interface;
using Models.ProductModels;

namespace ProductCatalog.Service.Interface
{
    public interface IAttachmentService
    {
        Task<IEnumerable<Attachment>> GetAllAttachments();
        Task<IEnumerable<Attachment>> GetAttachmentsByProductId(long productId);
        Task<long> AddAttachment(Attachment attachment);
        Task<bool> DeleteAttachment(long attachmentId);
    }
}
