using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiJobSearch.Migrations
{
    public partial class march15AddressOfficeUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GetRiteAddresses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<int>(type: "int", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ZipCode = table.Column<int>(type: "int", nullable: true),
                    Country = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteAddresses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteUsers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TodoItems",
                columns: table => new
                {
                    Id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsComplete = table.Column<bool>(type: "bit", nullable: false),
                    Secret = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TodoItems", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserLogins",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserLogins", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "UserModels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EmailAddress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Surname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    GivenName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserModels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteOffices",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OfficeName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OfficeEmail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OfficeAbout = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OfficeAddressId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteOffices", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteOffices_GetRiteAddresses_OfficeAddressId",
                        column: x => x.OfficeAddressId,
                        principalTable: "GetRiteAddresses",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GetRitePatient",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Birthdate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Injury = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<int>(type: "int", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    MedicalHistoryNotes = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRitePatient", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRitePatient_GetRiteAddresses_AddressId",
                        column: x => x.AddressId,
                        principalTable: "GetRiteAddresses",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_GetRitePatient_GetRiteUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "GetRiteUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteExercise",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BodyPart = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VideoURL = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isDefault = table.Column<bool>(type: "bit", nullable: false),
                    OfficeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteExercise", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteExercise_GetRiteOffices_OfficeId",
                        column: x => x.OfficeId,
                        principalTable: "GetRiteOffices",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GetRitePhysician",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    OfficeId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRitePhysician", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRitePhysician_GetRiteOffices_OfficeId",
                        column: x => x.OfficeId,
                        principalTable: "GetRiteOffices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GetRitePhysician_GetRiteUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "GetRiteUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteWorkout",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BodyPart = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isDefault = table.Column<bool>(type: "bit", nullable: false),
                    OfficeId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteWorkout", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteWorkout_GetRiteOffices_OfficeId",
                        column: x => x.OfficeId,
                        principalTable: "GetRiteOffices",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GetRiteAppointment",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AppointmentTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Reason = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Injury = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OfficeId = table.Column<int>(type: "int", nullable: false),
                    PatientId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteAppointment", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteAppointment_GetRiteOffices_OfficeId",
                        column: x => x.OfficeId,
                        principalTable: "GetRiteOffices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GetRiteAppointment_GetRitePatient_PatientId",
                        column: x => x.PatientId,
                        principalTable: "GetRitePatient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteOfficeGetRitePatient",
                columns: table => new
                {
                    OfficesId = table.Column<int>(type: "int", nullable: false),
                    PatientsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteOfficeGetRitePatient", x => new { x.OfficesId, x.PatientsId });
                    table.ForeignKey(
                        name: "FK_GetRiteOfficeGetRitePatient_GetRiteOffices_OfficesId",
                        column: x => x.OfficesId,
                        principalTable: "GetRiteOffices",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GetRiteOfficeGetRitePatient_GetRitePatient_PatientsId",
                        column: x => x.PatientsId,
                        principalTable: "GetRitePatient",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteTask",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TaskContent = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    isCompleted = table.Column<bool>(type: "bit", nullable: true),
                    PhysicianId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteTask", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteTask_GetRitePhysician_PhysicianId",
                        column: x => x.PhysicianId,
                        principalTable: "GetRitePhysician",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteExerciseGetRiteWorkout",
                columns: table => new
                {
                    ExercisesId = table.Column<int>(type: "int", nullable: false),
                    WorkoutsId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteExerciseGetRiteWorkout", x => new { x.ExercisesId, x.WorkoutsId });
                    table.ForeignKey(
                        name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteExercise_ExercisesId",
                        column: x => x.ExercisesId,
                        principalTable: "GetRiteExercise",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteWorkout_WorkoutsId",
                        column: x => x.WorkoutsId,
                        principalTable: "GetRiteWorkout",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GetRiteAppointmentGetRitePhysicians",
                columns: table => new
                {
                    GetRiteAppointmentId = table.Column<int>(type: "int", nullable: false),
                    GetRitePhysicianId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteAppointmentGetRitePhysicians", x => new { x.GetRitePhysicianId, x.GetRiteAppointmentId });
                    table.ForeignKey(
                        name: "FK_GetRiteAppointmentGetRitePhysicians_GetRiteAppointment_GetRiteAppointmentId",
                        column: x => x.GetRiteAppointmentId,
                        principalTable: "GetRiteAppointment",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_GetRiteAppointmentGetRitePhysicians_GetRitePhysician_GetRitePhysicianId",
                        column: x => x.GetRitePhysicianId,
                        principalTable: "GetRitePhysician",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointment_OfficeId",
                table: "GetRiteAppointment",
                column: "OfficeId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointment_PatientId",
                table: "GetRiteAppointment",
                column: "PatientId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointmentGetRitePhysicians_GetRiteAppointmentId",
                table: "GetRiteAppointmentGetRitePhysicians",
                column: "GetRiteAppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteExercise_OfficeId",
                table: "GetRiteExercise",
                column: "OfficeId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteExerciseGetRiteWorkout_WorkoutsId",
                table: "GetRiteExerciseGetRiteWorkout",
                column: "WorkoutsId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteOfficeGetRitePatient_PatientsId",
                table: "GetRiteOfficeGetRitePatient",
                column: "PatientsId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteOffices_OfficeAddressId",
                table: "GetRiteOffices",
                column: "OfficeAddressId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRitePatient_AddressId",
                table: "GetRitePatient",
                column: "AddressId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRitePatient_UserId",
                table: "GetRitePatient",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GetRitePhysician_OfficeId",
                table: "GetRitePhysician",
                column: "OfficeId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRitePhysician_UserId",
                table: "GetRitePhysician",
                column: "UserId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteTask_PhysicianId",
                table: "GetRiteTask",
                column: "PhysicianId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteWorkout_OfficeId",
                table: "GetRiteWorkout",
                column: "OfficeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GetRiteAppointmentGetRitePhysicians");

            migrationBuilder.DropTable(
                name: "GetRiteExerciseGetRiteWorkout");

            migrationBuilder.DropTable(
                name: "GetRiteOfficeGetRitePatient");

            migrationBuilder.DropTable(
                name: "GetRiteTask");

            migrationBuilder.DropTable(
                name: "TodoItems");

            migrationBuilder.DropTable(
                name: "UserLogins");

            migrationBuilder.DropTable(
                name: "UserModels");

            migrationBuilder.DropTable(
                name: "GetRiteAppointment");

            migrationBuilder.DropTable(
                name: "GetRiteExercise");

            migrationBuilder.DropTable(
                name: "GetRiteWorkout");

            migrationBuilder.DropTable(
                name: "GetRitePhysician");

            migrationBuilder.DropTable(
                name: "GetRitePatient");

            migrationBuilder.DropTable(
                name: "GetRiteOffices");

            migrationBuilder.DropTable(
                name: "GetRiteUsers");

            migrationBuilder.DropTable(
                name: "GetRiteAddresses");
        }
    }
}
