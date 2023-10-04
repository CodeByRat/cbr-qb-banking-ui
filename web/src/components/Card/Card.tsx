import { MouseEventHandler, ReactNode } from "react";
import "./Card.css";

interface CardProps {
  children: ReactNode;
  center: boolean;
  startCenter?: boolean;
  onClickCB?: MouseEventHandler;
}

const Card: React.FC<CardProps> = ({
  children,
  center,
  startCenter,
  onClickCB,
}) => {
  const isCenter = center ? "card__center" : "";
  const isStartCenter = startCenter ? "card__start-center" : "";

  return (
    <div onClick={onClickCB} className={`card ${isCenter} ${isStartCenter}`}>
      {children}
    </div>
  );
};

export default Card;
