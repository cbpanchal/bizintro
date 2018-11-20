import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import AuthContainer from "../containers/AuthContainer/AuthContainer";
import BottomTabNavigation from "./bottomTabs";

export default createAppContainer(createSwitchNavigator({
    Login: { screen: AuthContainer },
    Home: { screen: BottomTabNavigation }
}));