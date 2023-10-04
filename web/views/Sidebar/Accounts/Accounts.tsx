import AccountCard from "./AccountCard/AccountCard";
import "./Accounts.css";
import useAccounts from "./hooks/useAccounts";

export interface Account {
  accountName: string;
  amount: number;
}

interface AccountProps {
  accounts: Account[];
}

const Accounts: React.FC<AccountProps> = ({ accounts }) => {
  const { activeAccount, setActiveAccount } = useAccounts();

  return (
    <section>
      <h3 className="accounts-text">Accounts</h3>
      <ul>
        {accounts.map((account) => (
          <li>
            <AccountCard
              accountName={account.accountName}
              amount={account.amount}
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
