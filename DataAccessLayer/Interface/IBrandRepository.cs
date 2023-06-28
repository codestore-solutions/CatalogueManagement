﻿using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Interface
{
    public interface IBrandRepository : IGenericRepository<Brand>
    {
        Task<IEnumerable<Product>> GetProductsByBrand(long id);
    }
}