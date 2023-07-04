using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class Brand : EntityBase
    {

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

    }
}
