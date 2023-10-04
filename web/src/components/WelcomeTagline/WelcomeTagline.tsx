import MoneyText from "../MoneyText/MoneyText";
import "./WelcomeTagline.css";

interface WelcomeTaglineProps {
  username: string;
  cashAmount: number;
}

const WelcomeTagline: React.FC<WelcomeTaglineProps> = ({
  username,
  cashAmount,
}) => {
  return (
    <div className="welcome-tagline">
      <h1>Welcome, {username}</h1>
      <p>
        Wallet <MoneyText value={cashAmount} />
      </p>
    </div>
  );
};

export default WelcomeTagline;
