using BlogApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BlogApi.DataContext
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<UsuarioModel> Usuario { get; set; }

    }
}
