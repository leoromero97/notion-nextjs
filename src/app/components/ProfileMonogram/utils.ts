export const getBgColor = (name?: string): string => {
  let bgColor = "bg-ocean-500";

  if (
    name?.includes("Developer") ||
    name?.includes("Consultor") ||
    name?.includes("Tester") ||
    name?.includes("Tech")
  )
    bgColor = "bg-ceibo-700";
  if (name?.includes("Partner")) bgColor = "bg-acai-700";
  if (name?.includes("Coordinator")) bgColor = "bg-muta-100";

  return bgColor;
};

export const getTextColor = (name?: string): string => {
  let textColor = "text-white";

  if (name?.includes("Coordinator")) textColor = "text-muta-900";

  return textColor;
};
