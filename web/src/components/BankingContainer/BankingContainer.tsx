import "./BankingContainer.css";

interface BankingContainerProps {
  children: React.ReactNode;
}

const BankingContainer: React.FC<BankingContainerProps> = ({ children }) => {
  return <div className="banking-container">{children}</div>;
};

export default BankingContainer;
