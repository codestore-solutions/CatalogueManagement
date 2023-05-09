﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public class Varient
    {
        [Key]
        public long Id { get; set; }

        public long ProductId { get; set; }
        [ForeignKey(nameof(ProductId))]

        [Required]
        public string Description { get; set; } = null!;

        public bool IsActive { get; set; }

        [Required]
        public decimal Price { get; set; }

        [Required]
        public int AvailableStock { get; set; }

    }
}
