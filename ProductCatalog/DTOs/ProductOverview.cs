namespace ProductCatalog.DTOs
{
    public class ProductOverview
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public Decimal Rating { get; set; }
        public decimal Price { get; set; } = decimal.Zero;
        public string Attachment { get; set; } = string.Empty;
    }
}
