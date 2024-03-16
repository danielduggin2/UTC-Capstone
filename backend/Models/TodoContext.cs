using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace WebApiJobSearch.Models
{
    public class TodoContext : DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public DbSet<TodoItem> TodoItems { get; set; } = null!;

        public DbSet<UserModel> UserModels { get; set; } = null!;
        public DbSet<UserLogin> UserLogins { get; set; } = null!;

        public DbSet<GetRiteAddress> GetRiteAddresses { get; set; } = null!;
        public DbSet<GetRiteOffice> GetRiteOffices { get; set; } = null!;
        public DbSet<GetRiteUser> GetRiteUsers { get; set; } = null!;
        public DbSet<GetRitePatient> GetRitePatients { get; set; } = null!;
        public DbSet<GetRitePhysician> GetRitePhysicians { get; set; } = null!;
        public DbSet<GetRiteTask> GetRiteTasks { get; set; } = null!;
        public DbSet<GetRiteExercise> GetRiteExercises { get; set; } = null!;
        public DbSet<GetRiteWorkout> GetRiteWorkouts { get; set; } = null!;
        public DbSet<GetRiteAppointment> GetRiteAppointments { get; set; } = null!;
        public DbSet<FluentGetRiteAppointmentGetRitePhysician> FluentGetRiteAppointmentGetRitePhysicians { get; set; } = null!;
        public DbSet<GetRiteAppointmentNote> GetRiteAppointmentNotes { get; set; } = null!;
        public DbSet<GetRiteAppointmentExercise> GetRiteAppointmentExercises { get; set; } = null!;
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<GetRiteAppointment>()
                .HasMany(a => a.AssignedPhysicians)
                .WithMany(p => p.AssignedAppointments)
                .UsingEntity<FluentGetRiteAppointmentGetRitePhysician>(
                j => j.HasOne(ap => ap.GetRitePhysician)
                    .WithMany()
                    .HasForeignKey(ap => ap.GetRitePhysicianId)
                    .OnDelete(DeleteBehavior.NoAction),
                j => j.HasOne(ap => ap.GetRiteAppointment)
                    .WithMany()
                    .HasForeignKey(ap => ap.GetRiteAppointmentId)
                    .OnDelete(DeleteBehavior.NoAction),
                j =>
                {
                    j.ToTable("GetRiteAppointmentGetRitePhysicians");
                    j.HasKey(ap => new { ap.GetRitePhysicianId, ap.GetRiteAppointmentId });
                }
                );
        }
    }
}
