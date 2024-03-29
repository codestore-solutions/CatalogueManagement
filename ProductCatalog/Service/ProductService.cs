﻿using DataAccessLayer.Common;
using DataAccessLayer.Data;
using DataAccessLayer.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.Hosting;
using Microsoft.EntityFrameworkCore;
using Models.ProductModels;
using ProductCatalog.DTOs;
using ProductCatalog.DTOs.Incoming;
using ProductCatalog.Service.Interface;

namespace ProductCatalog.Service
{
    public class ProductService : IProductService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IProductRepository _repository;
        private readonly IVarientService _varientService;
        private readonly IAttachmentService _attachmentService;

        public ProductService(IUnitOfWork unitOfWork, IVarientService varientService, IAttachmentService attachmentService)
        {
            _unitOfWork = unitOfWork;
            _repository = unitOfWork.ProductRepository;
            _varientService = varientService;
            _attachmentService = attachmentService;
        }

        public async Task<bool> MarkInactive(long  id)
        {
            var res = await _repository.MarkInactive(id);
            return res == true;
        }

        public async Task<long> AddProduct(ProductIn productIn)
        {
            var product = Mapper.Mapper.ProductInToProduct(productIn);
            _repository.Add(product);
            await _unitOfWork.SaveAsync();
            return product.Id;
        }

        public async Task<long> AddProductWithDetails(ProductWithVarient productdetail)
        {
            var productIn = new ProductIn
            {
                Name = productdetail.Name,
                CategoryId = productdetail.CategoryId,
                SubCategoryId = productdetail.SubcategoryId,
                BrandId = productdetail.BrandId,
                SellerId = productdetail.SellerId
            };
            var productId = await AddProduct(productIn);
            foreach(var item in productdetail.Varients)
            {
                item.ProductId = productId;
                var varientId = await _varientService.AddVarient(item);
                foreach (var attachmentUrl in item.Attachment)
                {
                    Attachment attachment = new Attachment
                    {
                        ProductId = productId,
                        VarientId = varientId,
                        AttachmentURL = attachmentUrl,
                        IsUploadedByAdmin = true
                    };
                    await _attachmentService.AddAttachment(attachment);
                }
            }
            return productId;
        }

        

        private string CheckAttachment(long itemId)
        {
            var attachment = _repository.GetAttachment(itemId);
            return attachment ?? StringConstants.NoImageAvailable;
        }


        public async Task<ResponseDto<IEnumerable<ProductOverview>>> GetAll()
        {
            var query = await _repository.GetAllAsync();

            List<ProductOverview> products = new List<ProductOverview>();

            foreach (var item in query)
            {
                products.Add(new ProductOverview()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Rating = _repository.GetRating(item.Id),
                    Attachment = CheckAttachment(item.Id), 
                    Price = await _unitOfWork.VarientRepository.GetPriceOfOneVarient(item.Id)
                });
            }

            var res = ResponseDto<IEnumerable<ProductOverview>>.CreateSuccessResponse((int)StatusCodes.Status200OK, true, products);

            return res;
        }

        public async Task<ProductDetailDto?> GetProductDetail(long id)
        {
            var product = await _repository.GetAsync(id);
            var varients = await _repository.GetVarientsByProductId(id);
            //var attachments = await _repository.GetAttachmentsByProductId(id);
            //var reviews = await _repository.GetReviewsByProductId(id);
            List<VarientOut> varientOuts = new();
            foreach (var item in varients)
            {
                varientOuts.Add(new VarientOut
                {
                    Id = item.Id,
                    ProductId = item.ProductId,
                    Price = item.Price,
                    Name = item.Name,
                    SKU = item.SKU,
                    UOM = item.UOM,
                    IsActive = item.IsActive,
                    AvailableStock = item.AvailableStock,
                    Description = item.Description,
                    Attachment = (IList<string>)await _attachmentService.GetAttachmentsByVarientId(item.Id)
                });
            }

            if (product == null) return null;

            return new ProductDetailDto()
            {
                Id = product.Id,
                Name = product.Name,
                CategoryId = product.CategoryId,
                SubCategoryId = product.SubCategoryId,
                BrandId = product.BrandId,
                VendorId = product.SellerId,
                Varients = varientOuts
            };
        }

        public async Task<ResponseDto<IEnumerable<ProductOverview>>> GetAllByCategory(long categoryId)
        {
            var query = await _repository.GetProductByCategory(categoryId);

            List<ProductOverview> products = new List<ProductOverview>();

            foreach (var item in query)
            {
                products.Add(new ProductOverview()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Rating = _repository.GetRating(item.Id),
                    Attachment = _repository.GetAttachment(item.Id),
                    Price = await _unitOfWork.VarientRepository.GetPriceOfOneVarient(item.Id)
                });
            }

            var res = ResponseDto<IEnumerable<ProductOverview>>.CreateSuccessResponse((int)StatusCodes.Status200OK, true, products);

            return res;
        }

        public async Task<ResponseDto<IEnumerable<ProductOverview>>> GetAllBySubCategory(long subCategoryId)
        {
            var query = await _repository.GetProductBySubCategory(subCategoryId);

            List<ProductOverview> products = new List<ProductOverview>();

            foreach (var item in query)
            {
                products.Add(new ProductOverview()
                {
                    Id = item.Id,
                    Name = item.Name,
                    Rating = _repository.GetRating(item.Id),
                    Attachment = _repository.GetAttachment(item.Id),
                    Price = await _unitOfWork.VarientRepository.GetPriceOfOneVarient(item.Id)
                });
            }

            var res = ResponseDto<IEnumerable<ProductOverview>>.CreateSuccessResponse((int)StatusCodes.Status200OK, true, products);

            return res;
        }

    }
}
