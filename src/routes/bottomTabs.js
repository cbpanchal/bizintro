import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import DrawerNavigation from "./drawerNav";

const drawerRoutes = {
    Home: {
      screen: DrawerNavigation
    },
    Search: {
        screen: DrawerNavigation
    },
    Profile: {
        screen: DrawerNavigation
    }
} 
const drawerStyles = {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      console.log(navigation, "routeName");
      
      let iconName, iconType;
      if (routeName === 'Home') {
        iconName = `home`;
        iconType = "MaterialIcons";
      } else if (routeName === 'Search') {
        iconName = `ios-search`;
        iconType = "Ionicons"
      } else if (routeName === 'Profile') {
        iconName = `user`;
        iconType = "SimpleLineIcons"
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      }
      return <Icon type={iconType} name={iconName} size={horizontal ? 20 : 25} style={{color: "#e0e0e0"}}/>;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#96c3cf',
    inactiveTintColor: '#9b9b9b',
    style: {
      height: 70,
      padding: 10,
      borderTopColor: "#fff"
    }
  },
}
export default createBottomTabNavigator(drawerRoutes, drawerStyles)