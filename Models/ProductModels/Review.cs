using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class Review : EntityBase
    {
        //[Key]
        //public long Id { get; set; }

        [Required]
        [ForeignKey(nameof(CustomerId))]
        public long CustomerId { get; set; }

        [Required]
        public long ProductId { get; set; }

        [Required]
        [DataType("decimal(3,2)")]
        public decimal Rating { get; set; }

        [StringLength(255)]
        public string? Comment { get; set; }

        [ForeignKey(nameof(AttachmentId))]
        public long? AttachmentId { get; set; }


        //public string TanentId { get; set; }

    }
}
