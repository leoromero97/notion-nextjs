import React from "react";
import Image from "next/image";
import type { RolePropTypes } from "./types";
import { getRoleIcon, getRoleType } from "./utils";

export default function Role({ projectName, name }: RolePropTypes) {
  const roleType = getRoleType(name)
  const iconRole = getRoleIcon(roleType);
  
  return (
    <div className="flex flex-row gap-2 items-center">
      {iconRole && <Image src={iconRole} alt="Ícono" height={16} width={16} />}
      <span className="font-semibold">{name}</span>
      {projectName && <span>{projectName ?? "@xxxxxxxxxx"}</span>}
    </div>
  );
}
