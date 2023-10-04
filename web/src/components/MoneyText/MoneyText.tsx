import "./MoneyText.css";

interface MoneyTextProps {
  value: number;
}

const MoneyText: React.FC<MoneyTextProps> = ({ value }) => {
  const positive = Math.sign(value);

  return (
    <span
      className={
        positive
          ? "money-text money-text__positive"
          : "money-text money-text__negative"
      }
    >
      {positive ? null : "-"} ${value.toLocaleString("en-US")}
    </span>
  );
};

export default MoneyText;
