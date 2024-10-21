import React from "react";

export type SeniorityPropTypes = {
  types?:
    | "Trainee"
    | "Junior"
    | "Semi Senior"
    | "Mid Senior"
    | "Senior"
    | "Expert"
    | "Technical Lead"
    | "Head"
    | "COO"
    | "CFO"
    | "CEO";
};
export default function Seniority({ types = "Junior" }: SeniorityPropTypes) {
  const monogramSeniority = {
    Trainee: "Tr",
    Junior: "Jr",
    "Semi Senior": "Ssr",
    "Mid Senior": "Msr",
    Senior: "Sr",
    Expert: "Exp",
    "Technical Lead": "Ld",
    Head: "Hd",
    COO: "COO",
    CFO: "CFO",
    CEO: "CEO",
  };
  const bgColor = {
    Trainee: "bg-acai-50",
    Junior: "bg-acai-100",
    "Semi Senior": "bg-acai-200",
    "Mid Senior": "bg-acai-300",
    Senior: "bg-acai-400",
    Expert: "bg-acai-500",
    "Technical Lead": "bg-acai-600",
    Head: "bg-acai-700",
    COO: "bg-acai-900",
    CFO: "bg-acai-900",
    CEO: "bg-acai-900",
  };
  const textColor = {
    Trainee: "text-acai-900",
    Junior: "text-acai-900",
    "Semi Senior": "text-acai-900",
    "Mid Senior": "text-acai-900",
    Senior: "text-white",
    Expert: "text-white",
    "Technical Lead": "text-white",
    Head: "text-white",
    COO: "text-white",
    CFO: "text-white",
    CEO: "text-white",
  };
  return (
    <div
      className={[
        "h-10 w-10 flex items-center justify-center rounded rotate-45",
        `${bgColor[types]}`,
        `${textColor[types]}`,
      ].join(" ")}
    >
      <span className="-rotate-45 text-inherit font-semibold">
        {monogramSeniority[types]}
      </span>
    </div>
  );
}
