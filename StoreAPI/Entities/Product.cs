namespace StoreAPI.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public int Name { get; set; }
        public string Description { get; set; }    
        public long Price { get; set; }
        public string PictureURL { get; set; }
        public string Type { get; set; }    
        public string Brand { get; set; }
        public int QuantityInStock { get; set; }
    }
}