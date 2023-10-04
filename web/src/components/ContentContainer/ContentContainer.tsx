import { ReactNode } from "react";
import "./ContentContainer.css";

type LineLocation = "left" | "right" | "top" | "bottom" | "none";
type FlexDirection = "column-card" | "row";

interface ContentContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  lineLocation: LineLocation;
  flexDirection: FlexDirection;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  children,
  lineLocation,
  flexDirection,
  ...rest
}) => {
  return (
    <div
      className={`content-container__line-${lineLocation} content-container__flex-${flexDirection}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
