import "./Sidebar.css";
import Card from "../../components/Card/Card";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import WelcomeTagline from "../../components/WelcomeTagline/WelcomeTagline";
import Accounts from "./Accounts/Accounts";
import Button from "../../components/Button/Button";

interface SidebarProps {
  accountNumber: string;
  username: string;
  cashBalance: number;
  bankBalance: number;
}

const SideBar: React.FC<SidebarProps> = ({
  accountNumber,
  username,
  cashBalance,
  bankBalance,
}) => {
  const accounts = [
    { accountName: "Checking", accountBalance: bankBalance },
    { accountName: "Savings", accountBalance: 175135.16 },
    { accountName: "Burger Shot", accountBalance: 1175135.16 },
  ];

  return (
    <div className="sidebar">
      <Card center={false}>
        <ContentContainer lineLocation="none" flexDirection="row">
          <WelcomeTagline
            username={username as string}
            cashAmount={cashBalance as number}
          />
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
