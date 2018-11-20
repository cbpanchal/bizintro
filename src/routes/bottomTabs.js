import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import DrawerNavigation from "./drawerNav";

const drawerRoutes = {
 
}
const drawerStyles = {
  
}
export default createBottomTabNavigator(
  {
    Home: {
      screen: DrawerNavigation
    },
    Search: {
        screen: DrawerNavigation
    },
    Profile: {
        screen: DrawerNavigation
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        console.log({routeName})
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
        return <Icon type={iconType} name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  }
  )