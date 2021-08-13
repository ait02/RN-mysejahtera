import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigations/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
