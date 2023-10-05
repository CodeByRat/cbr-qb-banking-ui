import React, { ReactNode, useState } from "react";
import "./App.css";
import { debugData } from "../../utils/debugData";
import { fetchNui } from "../../utils/fetchNui";
import BankingContainer from "../../components/BankingContainer/BankingContainer";
import SideBar from "../../views/Sidebar/Sidebar";
import MainContent from "../../views/MainContent/MainContent";
import { useNuiEvent } from "../../hooks/useNuiEvent";
import useHandleBankData from "./hooks/useHandleBankData";

export interface ContainerProps {
  children: ReactNode;
}

// This will set the NUI to visible if we are
// developing in browser
debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const App: React.FC = () => {
  const { accountNumber, bankBalance, cashBalance, username } =
    useHandleBankData();

  return (
    <div className="nui-wrapper">
      <BankingContainer>
        <SideBar
          accountNumber={accountNumber as string}
          username={username as string}
          cashBalance={cashBalance as number}
          bankBalance={bankBalance as number}
        />
        <MainContent></MainContent>
      </BankingContainer>
    </div>
  );
};

export default App;
