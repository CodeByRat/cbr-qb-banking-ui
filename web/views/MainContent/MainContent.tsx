import NavBar from "../../src/components/NavBar/NavBar";
import "./MainContent.css";
import Transactions from "../Transactions/Transactions";

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <NavBar />
      <Transactions />
    </div>
  );
};

export default MainContent;
