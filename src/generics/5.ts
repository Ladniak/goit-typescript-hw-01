export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

const RoleDescription = {
  [UserRole.admin]: "Admin",
  [UserRole.editor]: "Editor",
  [UserRole.guest]: "Guest",
};

export { RoleDescription };
