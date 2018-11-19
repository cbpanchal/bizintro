import React from "react";
import { Dimensions } from "react-native";
import { createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import DrawerNavigation from "./drawerNav";
import SidebarContainer from "../containers/SidebarContainer/SidebarContainer";
import AuthContainer from "../containers/AuthContainer/AuthContainer";
import HomeContainer from "../containers/HomeContainer/HomeContainer";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";
import SearchContainer from "../containers/SearchContainer/SearchContainer";

const DefaultDrawerNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeContainer
        },
        Search: {
            screen: SearchContainer
        },
        Profile: {
            screen: ProfileContainer
        }
    },
    {
        headerMode: 'screen',
        contentComponent: (props) => <SidebarContainer {...props}/>,
        drawerBackgroundColor: "rgb(114, 111, 172)",
        contentOptions: {
            activeLabelStyle:{
                color:"#fff",
            },
            activeBackgroundColor: "rgba(114, 111, 172, 0)",
            itemsContainerStyle:{
                paddingHorizontal: 10,
                paddingVertical: 5,
                alignItems: 'center',
            },
            labelStyle:{
                fontSize: 30,
                color: "rgb(174, 175, 223)",
              //  fontFamily: 'Roboto-Light',
                paddingVertical: 0,
                fontWeight: "normal",
                margin: 10
            }
        }
    },
    
)
const DefaultTabsNavigator = createBottomTabNavigator({
    Home: {
        screen: DrawerNavigation
    },
    Search: {
        screen: DrawerNavigation
    },
    Profile: {
        screen: DrawerNavigationrr
    }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              if (routeName === 'Home') {
                iconName = `ios-information-circle${focused ? '' : '-outline'}`;
              } else if (routeName === 'Settings') {
                iconName = `ios-options${focused ? '' : '-outline'}`;
              }
              return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
          }),
    })
const RootStack = createSwitchNavigator(
    {
        LoginScreen: {
            screen: AuthContainer
        },
        HomeScreen: {
            screen: DefaultTabsNavigator
        },
    },
    {
      initialRouteName: 'LoginScreen',
      headerMode: 'none',
    }
);



export default RootStack;