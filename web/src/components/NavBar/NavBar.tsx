import useSelector from "../../../views/Sidebar/Accounts/hooks/useSelector";
import ContentContainer from "../ContentContainer/ContentContainer";
import qbIcon from "../../images/logo.png";
import "./NavBar.css";

const navOptions = ["Home", "Transfer", "Account Options"];

const NavBar: React.FC = () => {
  const { activeAccount, setActiveAccount } = useSelector("Home");

  return (
    <div className="nav-container">
      <nav className="nav-bar">
        <ul>
          {navOptions.map((navOption) => {
            return (
              <ContentContainer
                lineLocation={activeAccount === navOption ? "bottom" : "none"}
                flexDirection="row"
                onClick={() => setActiveAccount(navOption)}
              >
                <li>{navOption}</li>
              </ContentContainer>
            );
          })}
        </ul>
      </nav>
      <img src={qbIcon} alt="QB-Core Icon"></img>
    </div>
  );
};

export default NavBar;
