using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StoreAPI.Data;
using StoreAPI.Entities;

namespace StoreAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context;
       public ProductsController(StoreContext context)
       {
            _context = context;
       }

       [HttpGet]
       public async Task<ActionResult<List<Product>>> GetProducts()
       {
         return await _context.Products.ToListAsync();
       }

       [HttpGet("{id}")]
       public async Task<ActionResult<Product>> GetProduct(int id)
       {
         return  await _context.Products.FindAsync(id);
       }
    }
}