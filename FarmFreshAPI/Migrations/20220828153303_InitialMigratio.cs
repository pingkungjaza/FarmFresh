using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FarmFreshAPI.Migrations
{
    public partial class InitialMigratio : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProductDetail",
                columns: table => new
                {
                    productId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    productName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    productSubName = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    productImage = table.Column<string>(type: "nvarchar(MAX)", nullable: false),
                    productPacket = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    productInfo = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    productAbout = table.Column<string>(type: "nvarchar(MAX)", nullable: false),
                    productCountry = table.Column<string>(type: "nvarchar(50)", nullable: false),
                    productQty = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductDetail", x => x.productId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProductDetail");
        }
    }
}
