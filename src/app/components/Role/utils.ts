import icAyf from "@/app/assets/icons/ic-a&f.svg";
import icBusiness from "@/app/assets/icons/ic-business.svg";
import icContent from "@/app/assets/icons/ic-content-designer.svg";
import icData from "@/app/assets/icons/ic-data.svg";
import icDesigner from "@/app/assets/icons/ic-designer.svg";
import icDeveloper from "@/app/assets/icons/ic-developer.svg";
import icEducation from "@/app/assets/icons/ic-education.svg";
import icGrowth from "@/app/assets/icons/ic-growth.svg";
import icProductDesigner from "@/app/assets/icons/ic-product-designer.svg";
import icResearcher from "@/app/assets/icons/ic-researcher.svg";
import icTalent from "@/app/assets/icons/ic-talent.svg";
import icUxDesigner from "@/app/assets/icons/ic-ux-designer.svg";
import icVisualDesigner from "@/app/assets/icons/ic-visual-designer.svg";
import type { RolePropTypes } from "./types";

export const getRoleType = (roleName?: string): RolePropTypes["type"] => {
  let type = "a&f";

  if (roleName === "UX Designer") type = "ux";
  if (roleName === "Product Designer") type = "product";
  if (roleName === "Talent") type = "people";
  if (roleName === "Designer") type = "designer";
  if (roleName === "Learning") type = "education";
  if (roleName === "Content Designer") type = "content";
  if (roleName === "Data") type = "analyst";
  if (roleName === "Visual Designer") type = "visual";
  if (roleName === "Business") type = "business";
  if (roleName?.includes("Developer")) type = "developer";
  if (roleName === "Growth") type = "growth";
  if (roleName?.includes("Researcher")) type = "researcher";

  return type as RolePropTypes["type"];
};

export const getRoleIcon = (type: RolePropTypes["type"]): string => {
  let icon = icAyf;

  if (type === "analyst") icon = icData;
  if (type === "business") icon = icBusiness;
  if (type === "content") icon = icContent;
  if (type === "designer") icon = icDesigner;
  if (type === "developer") icon = icDeveloper;
  if (type === "growth") icon = icGrowth;
  if (type === "learning") icon = icEducation;
  if (type === "people") icon = icTalent;
  if (type === "product") icon = icProductDesigner;
  if (type === "researcher") icon = icResearcher;
  if (type === "ux") icon = icUxDesigner;
  if (type === "visual") icon = icVisualDesigner;

  return icon;
};
