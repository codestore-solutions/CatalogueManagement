﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.ProductModels
{
    public abstract class EntityBase
    {
        public long Id { get; set; }
        public string TenantId { get; set; } = null!;
    }
}
