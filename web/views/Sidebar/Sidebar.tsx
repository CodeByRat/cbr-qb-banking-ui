import "./Sidebar.css";
import Card from "../../src/components/Card/Card";
import ContentContainer from "../../src/components/ContentContainer/ContentContainer";
import WelcomeTagline from "../../src/components/WelcomeTagline/WelcomeTagline";
import Accounts from "./Accounts/Accounts";
import Button from "../../src/components/Button/Button";

const accounts = [
  { accountName: "Checking", amount: 1.15 },
  { accountName: "Savings", amount: 175135.16 },
  { accountName: "Burger Shot", amount: 1175135.16 },
];

interface SidebarProps {
  accountNumber: string;
}

const SideBar: React.FC<SidebarProps> = ({ accountNumber }) => {
  return (
    <div className="sidebar">
      <Card center={true}>
        <ContentContainer lineLocation="left" flexDirection="row">
          <WelcomeTagline username="Maurice Beverly" cashAmount={10153.32} />
        </ContentContainer>
      </Card>
      <Accounts accounts={accounts} />
      <Button buttonType="red">Logout</Button>
      <Card center={true}>
        <div className="account-number-card">
          <span>Account Number</span>
          <span>{accountNumber}</span>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
