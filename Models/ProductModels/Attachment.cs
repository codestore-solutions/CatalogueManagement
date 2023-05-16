using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class Attachment : EntityBase
    {
        //[Key]
        //public long Id { get; set; }

        [Required]
        public long ProductId { get; set; }
        [ForeignKey(nameof(ProductId))]

        public bool IsUploadedByAdmin { get; set; }

        public long? ReviewId { get; set; }
        [ForeignKey(nameof(ReviewId))]
         
        public string AttachmentURL { get; set; } = string.Empty;
        //public string TanentId { get; set; }
    }
}
