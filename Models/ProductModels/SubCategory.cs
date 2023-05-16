using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class SubCategory : EntityBase
    {
        //[Key]
        //public long Id { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string Name { get; set; } = null!;

        [ForeignKey("CatagoryId")]
        public long CatagoryId { get; set; }
        //public string TanentId { get; set; }

    }
}
