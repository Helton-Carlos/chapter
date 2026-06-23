using Microsoft.EntityFrameworkCore;
using SystemCompany.Models;

namespace SystemCompany.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<User> Users { get; set; }
    public DbSet<Produto> Produtos { get; set; }
}
