import { stringToColor } from "@/utils/stringToColor";

export function stringToAvatar(name: string) {
  const nameArray = name.split(" ");
  const children = nameArray
    .slice(0, 2)
    .map((name) => name[0])
    .join("");
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: children,
  };
}
