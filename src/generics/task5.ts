//  Task 5

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleRecord = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: RoleRecord = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
