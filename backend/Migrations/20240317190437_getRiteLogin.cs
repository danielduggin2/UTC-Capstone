using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiJobSearch.Migrations
{
    public partial class getRiteLogin : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatients_GetRiteUsers_UserId",
                table: "GetRitePatients");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUsers_UserId",
                table: "GetRitePhysicians");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteUsers",
                table: "GetRiteUsers");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "GetRiteUsers");

            migrationBuilder.DropColumn(
                name: "Username",
                table: "GetRiteUsers");

            migrationBuilder.RenameTable(
                name: "GetRiteUsers",
                newName: "GetRiteUser");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteUser",
                table: "GetRiteUser",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "GetRiteLogin",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteLogin", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteLogin_GetRiteUser_UserId",
                        column: x => x.UserId,
                        principalTable: "GetRiteUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteLogin_UserId",
                table: "GetRiteLogin",
                column: "UserId",
                unique: true);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatients_GetRiteUser_UserId",
                table: "GetRitePatients",
                column: "UserId",
                principalTable: "GetRiteUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUser_UserId",
                table: "GetRitePhysicians",
                column: "UserId",
                principalTable: "GetRiteUser",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatients_GetRiteUser_UserId",
                table: "GetRitePatients");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUser_UserId",
                table: "GetRitePhysicians");

            migrationBuilder.DropTable(
                name: "GetRiteLogin");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteUser",
                table: "GetRiteUser");

            migrationBuilder.RenameTable(
                name: "GetRiteUser",
                newName: "GetRiteUsers");

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "GetRiteUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "GetRiteUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteUsers",
                table: "GetRiteUsers",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatients_GetRiteUsers_UserId",
                table: "GetRitePatients",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUsers_UserId",
                table: "GetRitePhysicians",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
