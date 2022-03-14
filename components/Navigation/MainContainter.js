import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeScreen } from "./Screens/HomeScreen";
import { MyDevicesScreen } from "./Screens/MyDevicesScreen";
import { SettingsScreen } from "./Screens/SettingsScreen";
import { ShopScreen } from "./Screens/ShopScreen";
import { SearchScreen } from "./Screens/SearchScreen";

const homeName = "Home";
const myDevicesName = "MyDevices";
const settingsName = "Settings";
const shopName = "Shop";
const searchName = "Search";

const Tab = createBottomTabNavigator();

export const MainContainer = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initalRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === myDevicesName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn === settingsName) {
              iconName = focused ? "settings" : "settings-outline";
            } else if (rn === shopName) {
              iconName = focused ? "basket" : "basket-outline";
            } else if (rn === searchName) {
              iconName = focused ? "search" : "search-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        // tabBarOptions={{
        //   tabBarActiveTintColor: "tomato",
        //   tabBarInactiveTintCOlor: "grey",
        //   tabBarLabelSize: { paddingBottom: 10, fontSize: 10 },
        //   tabBarstyle: { padding: 500, height: 500 },
        // }}
      >
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={shopName} component={ShopScreen} />
        <Tab.Screen name={myDevicesName} component={MyDevicesScreen} />
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
