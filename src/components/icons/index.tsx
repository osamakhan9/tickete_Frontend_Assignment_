import icons from "./icons.svg";
import { IconsPropstype } from "@/types";

export const Icons: React.FC<IconsPropstype> = ({
  name,
  size = "w-6 h-6",
  color,
}) => {
  return (
    <svg className={`${size} ${color}`}>
      <use href={`${icons}#${name}`} />
    </svg>
  );
};
