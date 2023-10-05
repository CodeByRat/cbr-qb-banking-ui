import { ContainerProps } from "../../views/App/App";
import "./Button.css";

type ButtonType = "red" | "green";

interface ButtonProps extends ContainerProps {
  buttonType: ButtonType;
}

const Button: React.FC<ButtonProps> = ({ children, buttonType }) => {
  return <button className={`button button__${buttonType}`}>{children}</button>;
};

export default Button;
