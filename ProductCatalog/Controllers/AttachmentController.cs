using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.ProductModels;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Controllers
{
    [Route("api/Attachment")]
    [ApiController]
    public class AttachmentController : ControllerBase
    {
        private readonly IAttachmentService _attachmentService;

        public AttachmentController(IAttachmentService attachmentService)
        {
            _attachmentService = attachmentService;
        }

        [HttpGet("product/{productId}")]
        public async Task<ActionResult<IEnumerable<string>>> GetAllAttchmentOfProduct(long productId)
        {
            var attachhments =  await _attachmentService.GetAttachmentsByProductId(productId);
            return Ok(attachhments);
        }

        [HttpGet("review/{reviewId}")]
        public async Task<ActionResult<IEnumerable<string>>> GetAttchmentOfReview(long reviewId)
        {
            var attachments = await _attachmentService.GetAttachmentByReviewId(reviewId);
            return Ok(attachments);
        }

        [HttpPost("addAttachment")]
        public async Task<IActionResult> PostAttachment(Attachment attachment)
        {
            long id = await _attachmentService.AddAttachment(attachment);
            return Ok(id);
        }

        [HttpDelete("delete/{attachmentId}")]
        public async Task<IActionResult> DeleteAttachment(long attachmentId)
        {
            var res = await _attachmentService.DeleteAttachment(attachmentId);
            return !res ?
                NotFound("No Attachment found") :
                Ok("Attachment deleted successfully");
        }

    }
}
