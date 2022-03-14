import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const MiscShopScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: 250, backgroundColor: "yellow" }}>
        <Text>Hello World!</Text>
        <Text> My Name is Matt</Text>
        <Text> This is My Misc Screen </Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
