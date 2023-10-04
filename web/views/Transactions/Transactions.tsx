import React from "react";
import "./Transactions.css";
import ContentContainer from "../../src/components/ContentContainer/ContentContainer";

const Transactions: React.FC = () => {
  return (
    <section className="transactions">
      <ContentContainer lineLocation="bottom" flexDirection="row">
        <h2>Transactions</h2>
      </ContentContainer>
    </section>
  );
};

export default Transactions;
