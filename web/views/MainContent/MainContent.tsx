import NavBar from "../../src/components/NavBar/NavBar";
import "./MainContent.css";
import Transactions, { Transaction } from "../Transactions/Transactions";
import burgerImage from "../../src/images/summer_food_1 1.png";

const transactions: Transaction[] = [
  {
    name: "Burger Shot",
    img: burgerImage,
    date: new Date("January 03, 2023"),
    amount: -235.71,
  },
  {
    name: "Vanilla Unicorn",
    date: new Date("January 05, 2023"),
    amount: -15030.81,
  },
  {
    name: '"Services"',
    date: new Date("January 05, 2023"),
    amount: 1738.69,
  },
];

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <NavBar />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default MainContent;
