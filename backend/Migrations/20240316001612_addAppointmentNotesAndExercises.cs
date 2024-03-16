using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApiJobSearch.Migrations
{
    public partial class addAppointmentNotesAndExercises : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointment_GetRiteOffices_OfficeId",
                table: "GetRiteAppointment");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointment_GetRitePatient_PatientId",
                table: "GetRiteAppointment");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRiteAppointment_GetRiteAppointmentId",
                table: "GetRiteAppointmentGetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRitePhysician_GetRitePhysicianId",
                table: "GetRiteAppointmentGetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExercise_GetRiteOffices_OfficeId",
                table: "GetRiteExercise");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteExercise_ExercisesId",
                table: "GetRiteExerciseGetRiteWorkout");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteWorkout_WorkoutsId",
                table: "GetRiteExerciseGetRiteWorkout");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteOfficeGetRitePatient_GetRitePatient_PatientsId",
                table: "GetRiteOfficeGetRitePatient");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatient_GetRiteAddresses_AddressId",
                table: "GetRitePatient");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatient_GetRiteUsers_UserId",
                table: "GetRitePatient");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysician_GetRiteOffices_OfficeId",
                table: "GetRitePhysician");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysician_GetRiteUsers_UserId",
                table: "GetRitePhysician");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteTask_GetRitePhysician_PhysicianId",
                table: "GetRiteTask");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteWorkout_GetRiteOffices_OfficeId",
                table: "GetRiteWorkout");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteWorkout",
                table: "GetRiteWorkout");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteTask",
                table: "GetRiteTask");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRitePhysician",
                table: "GetRitePhysician");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRitePatient",
                table: "GetRitePatient");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteExercise",
                table: "GetRiteExercise");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteAppointment",
                table: "GetRiteAppointment");

            migrationBuilder.RenameTable(
                name: "GetRiteWorkout",
                newName: "GetRiteWorkouts");

            migrationBuilder.RenameTable(
                name: "GetRiteTask",
                newName: "GetRiteTasks");

            migrationBuilder.RenameTable(
                name: "GetRitePhysician",
                newName: "GetRitePhysicians");

            migrationBuilder.RenameTable(
                name: "GetRitePatient",
                newName: "GetRitePatients");

            migrationBuilder.RenameTable(
                name: "GetRiteExercise",
                newName: "GetRiteExercises");

            migrationBuilder.RenameTable(
                name: "GetRiteAppointment",
                newName: "GetRiteAppointments");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteWorkout_OfficeId",
                table: "GetRiteWorkouts",
                newName: "IX_GetRiteWorkouts_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteTask_PhysicianId",
                table: "GetRiteTasks",
                newName: "IX_GetRiteTasks_PhysicianId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePhysician_UserId",
                table: "GetRitePhysicians",
                newName: "IX_GetRitePhysicians_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePhysician_OfficeId",
                table: "GetRitePhysicians",
                newName: "IX_GetRitePhysicians_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePatient_UserId",
                table: "GetRitePatients",
                newName: "IX_GetRitePatients_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePatient_AddressId",
                table: "GetRitePatients",
                newName: "IX_GetRitePatients_AddressId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteExercise_OfficeId",
                table: "GetRiteExercises",
                newName: "IX_GetRiteExercises_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteAppointment_PatientId",
                table: "GetRiteAppointments",
                newName: "IX_GetRiteAppointments_PatientId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteAppointment_OfficeId",
                table: "GetRiteAppointments",
                newName: "IX_GetRiteAppointments_OfficeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteWorkouts",
                table: "GetRiteWorkouts",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteTasks",
                table: "GetRiteTasks",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRitePhysicians",
                table: "GetRitePhysicians",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRitePatients",
                table: "GetRitePatients",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteExercises",
                table: "GetRiteExercises",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteAppointments",
                table: "GetRiteAppointments",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "GetRiteAppointmentExercises",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GetRiteAppointmentId = table.Column<int>(type: "int", nullable: false),
                    GetRiteExerciseId = table.Column<int>(type: "int", nullable: true),
                    Sets = table.Column<int>(type: "int", nullable: true),
                    Reps = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteAppointmentExercises", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteAppointmentExercises_GetRiteAppointments_GetRiteAppointmentId",
                        column: x => x.GetRiteAppointmentId,
                        principalTable: "GetRiteAppointments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GetRiteAppointmentExercises_GetRiteExercises_GetRiteExerciseId",
                        column: x => x.GetRiteExerciseId,
                        principalTable: "GetRiteExercises",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "GetRiteAppointmentNotes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GetRiteAppointmentId = table.Column<int>(type: "int", nullable: false),
                    Content = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GetRiteAppointmentNotes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GetRiteAppointmentNotes_GetRiteAppointments_GetRiteAppointmentId",
                        column: x => x.GetRiteAppointmentId,
                        principalTable: "GetRiteAppointments",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointmentExercises_GetRiteAppointmentId",
                table: "GetRiteAppointmentExercises",
                column: "GetRiteAppointmentId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointmentExercises_GetRiteExerciseId",
                table: "GetRiteAppointmentExercises",
                column: "GetRiteExerciseId");

            migrationBuilder.CreateIndex(
                name: "IX_GetRiteAppointmentNotes_GetRiteAppointmentId",
                table: "GetRiteAppointmentNotes",
                column: "GetRiteAppointmentId");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRiteAppointments_GetRiteAppointmentId",
                table: "GetRiteAppointmentGetRitePhysicians",
                column: "GetRiteAppointmentId",
                principalTable: "GetRiteAppointments",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRitePhysicians_GetRitePhysicianId",
                table: "GetRiteAppointmentGetRitePhysicians",
                column: "GetRitePhysicianId",
                principalTable: "GetRitePhysicians",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointments_GetRiteOffices_OfficeId",
                table: "GetRiteAppointments",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointments_GetRitePatients_PatientId",
                table: "GetRiteAppointments",
                column: "PatientId",
                principalTable: "GetRitePatients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteExercises_ExercisesId",
                table: "GetRiteExerciseGetRiteWorkout",
                column: "ExercisesId",
                principalTable: "GetRiteExercises",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteWorkouts_WorkoutsId",
                table: "GetRiteExerciseGetRiteWorkout",
                column: "WorkoutsId",
                principalTable: "GetRiteWorkouts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExercises_GetRiteOffices_OfficeId",
                table: "GetRiteExercises",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteOfficeGetRitePatient_GetRitePatients_PatientsId",
                table: "GetRiteOfficeGetRitePatient",
                column: "PatientsId",
                principalTable: "GetRitePatients",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatients_GetRiteAddresses_AddressId",
                table: "GetRitePatients",
                column: "AddressId",
                principalTable: "GetRiteAddresses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatients_GetRiteUsers_UserId",
                table: "GetRitePatients",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysicians_GetRiteOffices_OfficeId",
                table: "GetRitePhysicians",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUsers_UserId",
                table: "GetRitePhysicians",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteTasks_GetRitePhysicians_PhysicianId",
                table: "GetRiteTasks",
                column: "PhysicianId",
                principalTable: "GetRitePhysicians",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteWorkouts_GetRiteOffices_OfficeId",
                table: "GetRiteWorkouts",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRiteAppointments_GetRiteAppointmentId",
                table: "GetRiteAppointmentGetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRitePhysicians_GetRitePhysicianId",
                table: "GetRiteAppointmentGetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointments_GetRiteOffices_OfficeId",
                table: "GetRiteAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteAppointments_GetRitePatients_PatientId",
                table: "GetRiteAppointments");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteExercises_ExercisesId",
                table: "GetRiteExerciseGetRiteWorkout");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteWorkouts_WorkoutsId",
                table: "GetRiteExerciseGetRiteWorkout");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteExercises_GetRiteOffices_OfficeId",
                table: "GetRiteExercises");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteOfficeGetRitePatient_GetRitePatients_PatientsId",
                table: "GetRiteOfficeGetRitePatient");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatients_GetRiteAddresses_AddressId",
                table: "GetRitePatients");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePatients_GetRiteUsers_UserId",
                table: "GetRitePatients");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysicians_GetRiteOffices_OfficeId",
                table: "GetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRitePhysicians_GetRiteUsers_UserId",
                table: "GetRitePhysicians");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteTasks_GetRitePhysicians_PhysicianId",
                table: "GetRiteTasks");

            migrationBuilder.DropForeignKey(
                name: "FK_GetRiteWorkouts_GetRiteOffices_OfficeId",
                table: "GetRiteWorkouts");

            migrationBuilder.DropTable(
                name: "GetRiteAppointmentExercises");

            migrationBuilder.DropTable(
                name: "GetRiteAppointmentNotes");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteWorkouts",
                table: "GetRiteWorkouts");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteTasks",
                table: "GetRiteTasks");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRitePhysicians",
                table: "GetRitePhysicians");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRitePatients",
                table: "GetRitePatients");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteExercises",
                table: "GetRiteExercises");

            migrationBuilder.DropPrimaryKey(
                name: "PK_GetRiteAppointments",
                table: "GetRiteAppointments");

            migrationBuilder.RenameTable(
                name: "GetRiteWorkouts",
                newName: "GetRiteWorkout");

            migrationBuilder.RenameTable(
                name: "GetRiteTasks",
                newName: "GetRiteTask");

            migrationBuilder.RenameTable(
                name: "GetRitePhysicians",
                newName: "GetRitePhysician");

            migrationBuilder.RenameTable(
                name: "GetRitePatients",
                newName: "GetRitePatient");

            migrationBuilder.RenameTable(
                name: "GetRiteExercises",
                newName: "GetRiteExercise");

            migrationBuilder.RenameTable(
                name: "GetRiteAppointments",
                newName: "GetRiteAppointment");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteWorkouts_OfficeId",
                table: "GetRiteWorkout",
                newName: "IX_GetRiteWorkout_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteTasks_PhysicianId",
                table: "GetRiteTask",
                newName: "IX_GetRiteTask_PhysicianId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePhysicians_UserId",
                table: "GetRitePhysician",
                newName: "IX_GetRitePhysician_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePhysicians_OfficeId",
                table: "GetRitePhysician",
                newName: "IX_GetRitePhysician_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePatients_UserId",
                table: "GetRitePatient",
                newName: "IX_GetRitePatient_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRitePatients_AddressId",
                table: "GetRitePatient",
                newName: "IX_GetRitePatient_AddressId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteExercises_OfficeId",
                table: "GetRiteExercise",
                newName: "IX_GetRiteExercise_OfficeId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteAppointments_PatientId",
                table: "GetRiteAppointment",
                newName: "IX_GetRiteAppointment_PatientId");

            migrationBuilder.RenameIndex(
                name: "IX_GetRiteAppointments_OfficeId",
                table: "GetRiteAppointment",
                newName: "IX_GetRiteAppointment_OfficeId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteWorkout",
                table: "GetRiteWorkout",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteTask",
                table: "GetRiteTask",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRitePhysician",
                table: "GetRitePhysician",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRitePatient",
                table: "GetRitePatient",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteExercise",
                table: "GetRiteExercise",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_GetRiteAppointment",
                table: "GetRiteAppointment",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointment_GetRiteOffices_OfficeId",
                table: "GetRiteAppointment",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointment_GetRitePatient_PatientId",
                table: "GetRiteAppointment",
                column: "PatientId",
                principalTable: "GetRitePatient",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRiteAppointment_GetRiteAppointmentId",
                table: "GetRiteAppointmentGetRitePhysicians",
                column: "GetRiteAppointmentId",
                principalTable: "GetRiteAppointment",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteAppointmentGetRitePhysicians_GetRitePhysician_GetRitePhysicianId",
                table: "GetRiteAppointmentGetRitePhysicians",
                column: "GetRitePhysicianId",
                principalTable: "GetRitePhysician",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExercise_GetRiteOffices_OfficeId",
                table: "GetRiteExercise",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteExercise_ExercisesId",
                table: "GetRiteExerciseGetRiteWorkout",
                column: "ExercisesId",
                principalTable: "GetRiteExercise",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteExerciseGetRiteWorkout_GetRiteWorkout_WorkoutsId",
                table: "GetRiteExerciseGetRiteWorkout",
                column: "WorkoutsId",
                principalTable: "GetRiteWorkout",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteOfficeGetRitePatient_GetRitePatient_PatientsId",
                table: "GetRiteOfficeGetRitePatient",
                column: "PatientsId",
                principalTable: "GetRitePatient",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatient_GetRiteAddresses_AddressId",
                table: "GetRitePatient",
                column: "AddressId",
                principalTable: "GetRiteAddresses",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePatient_GetRiteUsers_UserId",
                table: "GetRitePatient",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysician_GetRiteOffices_OfficeId",
                table: "GetRitePhysician",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRitePhysician_GetRiteUsers_UserId",
                table: "GetRitePhysician",
                column: "UserId",
                principalTable: "GetRiteUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteTask_GetRitePhysician_PhysicianId",
                table: "GetRiteTask",
                column: "PhysicianId",
                principalTable: "GetRitePhysician",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_GetRiteWorkout_GetRiteOffices_OfficeId",
                table: "GetRiteWorkout",
                column: "OfficeId",
                principalTable: "GetRiteOffices",
                principalColumn: "Id");
        }
    }
}
