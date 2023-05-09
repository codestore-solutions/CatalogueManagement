using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class ProductCategory
    {

        public long ProoductId { get; set; }
        public long CategoryId { get; set; }

        public virtual Product Product { get; set; } = null!;
        public virtual Category Category { get; set; } = null!;

    }
}
