type RoleType =
  | "ux"
  | "product"
  | "people"
  | "designer"
  | "learning"
  | "content"
  | "analyst"
  | "visual"
  | "business"
  | "developer"
  | "growth"
  | "a&f"
  | "researcher";

export type RolePropTypes = {
  name?: string;
  type?: RoleType;
  projectName?: string;
};
