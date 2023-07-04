using System.Globalization;

namespace ProductCatalog.DTOs.Outgoing
{
    public class CategoryOut
    {
        public long Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Status { get; set; }
    }
}
