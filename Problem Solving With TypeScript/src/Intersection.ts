{
  type users = {
    name: string;
    email: string;
  };
  type Admin = {
    adminLevel1: number;
  };

  type AdminUser = users & Admin;

  function describeAdmin(user: AdminUser): string {
    return `hey am ${user.name}.my email address${user.email}${user.adminLevel1}`;
  }

  const admin: AdminUser = {
    name: "solim",
    email: "a@gmail.com",
    adminLevel1: 3,
  };
  console.log(describeAdmin(admin));
}
