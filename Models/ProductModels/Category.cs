﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{

    public class Category
    {
        [Key]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; } = null!;

    }
}
