import AccountCard from "./AccountCard/AccountCard";
import "./Accounts.css";
import useSelector from "./hooks/useSelector";

export interface Account {
  accountName: string;
  accountBalance: number;
}

interface AccountProps {
  accounts: Account[];
}

const Accounts: React.FC<AccountProps> = ({ accounts }) => {
  const { activeAccount, setActiveAccount } = useSelector("Checking");

  return (
    <section>
      <h3 className="accounts-text">Accounts</h3>
      <ul>
        {accounts.map((account) => (
          <li>
            <AccountCard
              accountName={account.accountName}
              accountBalance={account.accountBalance}
              onClickCB={() => {
                setActiveAccount(account.accountName);
              }}
              active={activeAccount === account.accountName}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accounts;
