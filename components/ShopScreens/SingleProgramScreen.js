import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export const SingleProgramScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: 250, backgroundColor: "yellow" }}>
        <Text>Hello World!</Text>
        <Text> My Name is Matt</Text>
        <Text> Single Program </Text>
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
