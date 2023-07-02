using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{

    public class Category : EntityBase
    {
        //[Key]
        //public long Id { get; set; }

        [Required]
        [MinLength(2)]
        [MaxLength(50)]
        public string Name { get; set; } = null!;
        public virtual int StatusId { get; set; }
        public Status Status
        {
            get
            {
                return (Status)this.StatusId;
            }
            set
            {
                this.StatusId = (int)value;
            }
        }

        public virtual ICollection<ProductCategory> ProductCategory { get; set; } = null!;


    }
    public enum Status
    {
        Saved = 0,
        Pending = 1,
        Approved = 2,
    }
}
