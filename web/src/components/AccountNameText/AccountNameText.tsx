import { ContainerProps } from "../App";
import "./AccountNameText.css";

const AccountNameText: React.FC<ContainerProps> = ({ children }) => {
  return <p>{children}</p>;
};

export default AccountNameText;
