using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FarmFreshAPI.Models;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Drawing.Printing;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace FarmFreshAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController, Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme, Roles ="Administrator")]
    public class ProductDetailController : ControllerBase
    {
        private readonly ProductDetailContext _context;

        public ProductDetailController(ProductDetailContext context)
        {
            _context = context;
        }

        // GET: api/ProductDetail
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductDetail>>> GetProductDetail()
        {
          if (_context.ProductDetail == null)
          {
              return NotFound();
          }
            return await _context.ProductDetail.ToListAsync();
        }

        // GET: api/ProductDetail by page
        [HttpGet("product")]
        public async Task<ActionResult<IEnumerable<ProductDetail>>> GetProductDetailPage([FromQuery(Name = "page")] int page)
        {
            if (_context.ProductDetail == null)
            {
                return NotFound();
            }

            var pageResults = 3f;
            var pageCount = Math.Ceiling(_context.ProductDetail.Count() / pageResults);

            var products = await _context.ProductDetail.Skip((page - 1) * (int)pageResults).Take((int)pageResults).ToListAsync();

            var response = new ProductResponse
            {
                ProductDetailList = products,
                PerPage = products.Count(),
                Page = page,
                Total = _context.ProductDetail.Count(),
                TotalPages = (int)pageCount,
            };

            return Ok(response);
            //return await _context.ProductDetail.ToListAsync();
        }

        // GET: api/ProductDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDetail>> GetProductDetail(int id)
        {
          if (_context.ProductDetail == null)
          {
              return NotFound();
          }
            var productDetail = await _context.ProductDetail.FindAsync(id);

            if (productDetail == null)
            {
                return NotFound();
            }

            return productDetail;
        }



        // PUT: api/ProductDetail/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProductDetail(int id, ProductDetail productDetail)
        {
            if (id != productDetail.productId)
            {
                return BadRequest();
            }

            _context.Entry(productDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ProductDetail
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProductDetail>> PostProductDetail(ProductDetail productDetail)
        {
          if (_context.ProductDetail == null)
          {
              return Problem("Entity set 'ProductDetailContext.ProductDetail'  is null.");
          }
            _context.ProductDetail.Add(productDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProductDetail", new { id = productDetail.productId }, productDetail);
        }

        // DELETE: api/ProductDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProductDetail(int id)
        {
            if (_context.ProductDetail == null)
            {
                return NotFound();
            }
            var productDetail = await _context.ProductDetail.FindAsync(id);
            if (productDetail == null)
            {
                return NotFound();
            }

            _context.ProductDetail.Remove(productDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductDetailExists(int id)
        {
            return (_context.ProductDetail?.Any(e => e.productId == id)).GetValueOrDefault();
        }
    }
}
