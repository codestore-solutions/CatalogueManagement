using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using Models.ProductModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccessLayer.Data
{
    public class ProductDbContext : DbContext
    {
        public ProductDbContext(DbContextOptions<ProductDbContext> option)
            : base(option) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ProductCategory>(entity =>
            {
                entity.HasKey(pk => new { pk.CategoryId, pk.ProoductId});

                entity.HasOne(x => x.Product).WithMany(y => y.ProductCategory)
                    .HasForeignKey(x => x.ProoductId)
                    .OnDelete(DeleteBehavior.ClientSetNull);

                entity.HasOne(x => x.Category).WithMany(y => y.ProductCategory)
                    .HasForeignKey(x => x.CategoryId)
                    .OnDelete(DeleteBehavior.ClientSetNull);
            });

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
        }
        

        public DbSet<Product> Products { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<SubCategory> SubCatagories { get; set;}

        public DbSet<Attachment> Attachments { get; set; }

        public DbSet<Brand> Brands { get; set; }

        public DbSet<Review> Reviews { get; set; }

        public DbSet<Varient> Varients { get; set; }

        public DbSet<Seller> Sellers { get; set; }

    }
}
