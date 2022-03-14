import * as React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AllMyDevicesScreen } from "../DeviceScreens/AllMyDevicesScreen";
import { SingleDeviceScreen } from "../DeviceScreens/SingleDeviceScreen";

const Stack = createNativeStackNavigator();

export const MyDevicesScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="All">
        <Stack.Screen name="All" component={AllMyDevicesScreen} />
        <Stack.Screen name="SingleDevice" component={SingleDeviceScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
