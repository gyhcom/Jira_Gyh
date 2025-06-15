import { cn } from "@/lib/utils";
import { he, is } from "date-fns/locale";

interface DottedSeparator {
  className?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizontal" | "vertical";
};

export const DottedSeparator = ({
  className = "",
  color = "#d4d4d8", // Default color is gray-400
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizontal",
}: DottedSeparator) => {
  const isHorizontal = direction === "horizontal";
  return (
    <div
      className={cn(isHorizontal ? "w-full flex items-center":"h-full flex flex-con items-center",
        className
      )}
      style={{
        width: isHorizontal ? "100%" : height,
        height: isHorizontal ? height : "100%",
        backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
        backgroundSize: isHorizontal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} #{parseInt(dotSize) + parseInt(gapSize)}px`,
        backgroundRepeat: isHorizontal ? "repeat-x" : "repeat-y",      
        backgroundPosition: "center"
      }}
    />
  );
};
 

