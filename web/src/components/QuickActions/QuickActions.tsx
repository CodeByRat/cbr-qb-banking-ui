import Button from "../Button/Button";
import ContentContainer from "../ContentContainer/ContentContainer";
import "./QuickActions.css";

const QuickActions: React.FC = () => {
  return (
    <section className="quick-actions">
      <ContentContainer lineLocation="left" flexDirection="row">
        <h2>Quick Actions</h2>
      </ContentContainer>
      <div className="quick-actions__button-group-container">
        <div className="quick-actions__button-group">
          <Button buttonType="green">Deposit $100</Button>
          <Button buttonType="green">Deposit $1,000</Button>
          <Button buttonType="green">Deposit $10,000</Button>
        </div>
        <div className="quick-actions__button-group">
          <Button buttonType="red">Withdrawal $100</Button>
          <Button buttonType="red">Withdrawal $1,000</Button>
          <Button buttonType="red">Withdrawal $10,000</Button>
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
