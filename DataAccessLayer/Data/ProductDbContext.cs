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
        //public string TenantId { get; set; }
        //private readonly ITenantService _tenantService;
        //private Tenant _tenant;
        public ProductDbContext(DbContextOptions<ProductDbContext> option)
            : base(option)
        {
            //_tenantService = tenantService;
            //_tenant = _tenantService.GetTenant();
            //TenantId = _tenant.TID;

            //    if(_tenant.ConnectionString is { } connectionString)
            //    {
            //        Database.SetConnectionString(connectionString);
            //    }
        }

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



            //modelBuilder.Entity<Product>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Attachment>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Category>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<SubCategory>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Varient>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Brand>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Review>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

            //modelBuilder.Entity<Seller>(entity =>
            //{
            //    entity.HasKey(e => e.Id);
            //    entity.HasQueryFilter(x => x.TenantId == TenantId);

            //});

        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base(
        //    //var tenantConnectionString = _tenantService.GetConnectionString();
        //    //if (!string.IsNullOrEmpty(tenantConnectionString))
        //    //{
        //    //    var DBProvider = _tenantService.GetDatabaseProvider();
        //    //    if (DBProvider.ToLower() == "mssql")
        //    //    {
        //    //        optionsBuilder.UseSqlServer(_tenantService.GetConnectionString());
        //    //    }
        //    //}
        
        
        //public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        //{
        //    foreach(var entry in ChangeTracker.Entries<EntityBase>().Where(e => e.State == EntityState.Added))
        //    {
        //        entry.Entity.TenantId = TenantId;
        //    }
        //    return await base.SaveChangesAsync(cancellationToken);
        //}

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
