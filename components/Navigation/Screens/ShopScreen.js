import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AllShopScreen } from "../../ShopScreens/AllShopScreen";
import { AssistantShopScreen } from "../../ShopScreens/AssistantShopScreen";
import { GameShopScreen } from "../../ShopScreens/GameShopScreen";
import { MiscShopScreen } from "../../ShopScreens/MiscShopScreen";
import { SecurityShopScreen } from "../../ShopScreens/SecurityShopScreen";
import { SingleProgramScreen } from "../../ShopScreens/SingleProgramScreen";

const Stack = createNativeStackNavigator();

export const ShopScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="All">
        <Stack.Screen name="All Programs" component={AllShopScreen} />
        <Stack.Screen name="Assistant" component={AssistantShopScreen} />
        <Stack.Screen name="Game" component={GameShopScreen} />
        <Stack.Screen name="Security" component={SecurityShopScreen} />
        <Stack.Screen name="Misc" component={MiscShopScreen} />
        <Stack.Screen name="SingleProgram" component={SingleProgramScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
