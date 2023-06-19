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

        public async Task<bool> DeleteAttachment(long attachmentId)
        {
            var attachment = await _attachmentRepository.GetAsync(attachmentId);
            if (attachment == null) return false;
            _attachmentRepository.Delete(attachment);
            await _unitOfWork.SaveAsync();
            return true;
        }

        public Task<IEnumerable<Attachment>> GetAllAttachments()
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<string>> GetAttachmentsByProductId(long productId)
        {
            return await _attachmentRepository.GetAttachmentsByProductId(productId);
        }

        public async Task<ICollection<string>> GetAttachmentsByVarientId(long varientId)
        {
            return await _attachmentRepository.GetAttachmentsByVarientId(varientId);
        }

        public async Task<IEnumerable<string>> GetAttachmentByReviewId(long reviewId)
        {
            return await _attachmentRepository.GetAttachmentByReviewId(reviewId);
        }
    }
}
