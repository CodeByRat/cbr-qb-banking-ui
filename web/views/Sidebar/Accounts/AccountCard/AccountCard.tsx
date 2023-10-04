import "./AccountCard.css";
import { Account } from "../Accounts";
import Card from "../../../../src/components/Card/Card";
import ContentContainer from "../../../../src/components/ContentContainer/ContentContainer";
import AccountNameText from "../../../../src/components/AccountNameText/AccountNameText";
import MoneyText from "../../../../src/components/MoneyText/MoneyText";
import { MouseEventHandler } from "react";

interface AccountCardProps extends Account {
  active: boolean;
  onClickCB: MouseEventHandler;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountName,
  amount,
  active,
  onClickCB,
}) => {
  return (
    <Card center={false} startCenter={true} onClickCB={onClickCB}>
      <ContentContainer
        lineLocation={active ? "right" : "none"}
        flexDirection="column-card"
      >
        <AccountNameText>{accountName}</AccountNameText>
        <MoneyText value={amount} />
      </ContentContainer>
    </Card>
  );
};

export default AccountCard;
