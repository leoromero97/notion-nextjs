import React from "react";
import type { ProfilePropTypes } from "./types";
import { getBgColor, getTextColor } from "./utils";

export default function ProfileMonogram({
  name = "Developer",
}: ProfilePropTypes) {
  const bgColor = getBgColor(name);
  const textColor = getTextColor(name);
  const monogram = name
    ?.match(/\b(\w)/g)
    ?.join("")
    .toUpperCase();

  return (
    <span
      className={[
        "py-1 px-4 text-center flex items-center justify-center rounded-full font-semibold text-xs",
        bgColor,
        textColor,
      ].join(" ")}
    >
      {monogram}
    </span>
  );
}
