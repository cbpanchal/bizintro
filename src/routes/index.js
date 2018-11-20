import React from "react";
import { createSwitchNavigator } from "react-navigation";
import AuthContainer from "../containers/AuthContainer/AuthContainer";
import BottomTabNavigation from "./bottomTabs";

const RootStack = createSwitchNavigator(
    {
      Login: { screen: AuthContainer},
      Home: { screen: BottomTabNavigation }
  }
);



export default RootStack;