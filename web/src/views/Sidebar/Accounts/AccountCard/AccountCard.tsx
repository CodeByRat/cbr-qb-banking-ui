import "./AccountCard.css";
import { Account } from "../Accounts";
import Card from "../../../../components/Card/Card";
import ContentContainer from "../../../../components/ContentContainer/ContentContainer";
import AccountNameText from "../../../../components/AccountNameText/AccountNameText";
import MoneyText from "../../../../components/MoneyText/MoneyText";
import { MouseEventHandler } from "react";

interface AccountCardProps extends Account {
  active: boolean;
  onClickCB: MouseEventHandler;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountName,
  accountBalance,
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
        <MoneyText value={accountBalance} />
      </ContentContainer>
    </Card>
  );
};

export default AccountCard;
