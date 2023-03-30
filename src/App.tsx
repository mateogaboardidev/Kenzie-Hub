import React from "react";
import TechProvider from "./contexts/TechContext";
import UserProvider from "./contexts/UserContext";
import RoutesMain from "./Routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <UserProvider>
      <TechProvider>
        <GlobalStyle />
        <RoutesMain />
      </TechProvider>
    </UserProvider>
  );
}

export default App;
