import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

export const AllShopScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { flexDirection: "column" }]}>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Assistant")}
          style={styles.container}
        >
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={require("../../images/Alexa.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={require("../../images/Ring.png")}
          resizeMode="contain"
        />
      </View>
      <View style={[styles.container, { flexDirection: "row" }]}>
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={require("../../images/Nitendo64.png")}
          resizeMode="contain"
        />
        <Image
          style={{ flex: 1, height: undefined, width: undefined }}
          source={require("../../images/Misc.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
