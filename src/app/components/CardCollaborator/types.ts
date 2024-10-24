import type { DataPropTypes } from "@/app/types";
import type { SeniorityPropTypes } from "../Seniority";

export type CardPropTypes = {
  name?: string;
  imageUrl?: string;
  role?: string;
  seniority?: SeniorityPropTypes["types"];
  client?: DataPropTypes["client"];
};
