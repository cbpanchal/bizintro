import React from "react";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import { Icon } from "native-base";
import HomeContainer from "../containers/HomeContainer/HomeContainer";
import ProfileContainer from "../containers/ProfileContainer/ProfileContainer";
import SearchContainer from "../containers/SearchContainer/SearchContainer";

const RootStack = createBottomTabNavigator(
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
            return <Icon type={iconType} name={iconName} size={horizontal ? 20 : 25} color="white"/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        },
      }
);



export default RootStack;