using DataAccessLayer.Interface;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class AttachmentService : IAttachmentService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAttachmentRepository _attachmentRepository;

        public AttachmentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _attachmentRepository = unitOfWork.AttachmentRepository;
        }

        public async Task<long> AddAttachment(Attachment attachment)
        {
            _attachmentRepository.Add(attachment);
            await _unitOfWork.SaveAsync();
            return attachment.Id;
        }

        public Task<bool> DeleteAttachment(long attachmentId)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Attachment>> GetAllAttachments()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Attachment>> GetAttachmentsByProductId(long productId)
        {
            return await _attachmentRepository.GetAttachmentsByProductId(productId);
        }
    }
}
