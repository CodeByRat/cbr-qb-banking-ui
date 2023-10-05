import React from "react";
import "./Transactions.css";
import ContentContainer from "../../src/components/ContentContainer/ContentContainer";
import Card from "../../src/components/Card/Card";
import MoneyText from "../../src/components/MoneyText/MoneyText";
import defaultTransactionImage from "../../src/images/transaction.png";

export interface Transaction {
  name: string;
  date: Date;
  img?: string;
  amount: number;
}

interface TransactionsProps {
  transactions: Transaction[];
}

const Transactions: React.FC<TransactionsProps> = ({ transactions }) => {
  return (
    <section className="transactions">
      <ContentContainer lineLocation="left" flexDirection="row">
        <h2>Transactions</h2>
      </ContentContainer>
      <ul>
        {transactions.map((transaction) => (
          <Card center={false}>
            <img
              src={transaction.img ? transaction.img : defaultTransactionImage}
              alt={transaction.name}
            ></img>
            <div className="name-date">
              <p>{transaction.name}</p>
              <span>{transaction.date.toLocaleDateString()}</span>
            </div>
            <MoneyText value={transaction.amount} />
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default Transactions;
