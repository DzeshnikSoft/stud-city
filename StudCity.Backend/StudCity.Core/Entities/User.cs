using StudCity.Core.Enums;

namespace StudCity.Core.Entities;

public class User : BaseEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string FullName { get; set; }
    public DateOnly DateOfBirthday { get; set; } = DateOnly.FromDateTime(DateTime.Today);
    public Account Account { get; set; }
    public Guid AccountId { get; set; }
    public Gender Gender { get; set; }
    public Image? Image { get; set; }
    public Settings? Settings { get; set; }
}