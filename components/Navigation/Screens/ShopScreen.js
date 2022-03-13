import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AllShopScreen } from "../../ShopScreens/AllShopScreen";
import { AssistantShopScreen } from "../../ShopScreens/AssistantShopScreen";

const Stack = createNativeStackNavigator();

export const ShopScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="All">
        <Stack.Screen name="All" component={AllShopScreen} />
        <Stack.Screen name="Assistant" component={AssistantShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
