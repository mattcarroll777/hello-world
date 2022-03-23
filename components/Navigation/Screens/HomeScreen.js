import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
let monthName = months[d.getMonth()];
let day = d.getDate();
let year = d.getFullYear();

export const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.head}>
        Hello, Today is {monthName} {day} {year}
      </Text>
      <Text style={styles.head}>Matt Carroll's StackAThon App</Text>
      <Text style={styles.head}>Built the front-end of of a cellphone app</Text>
      <Text style={styles.head}>Using React Native</Text>
      <View style={styles.container}>
        <View style={{ width: 250, backgroundColor: "yellow" }}>
          <Text>Hello World!</Text>
          <Text> My Name is Matt</Text>
          <Text> This is My HomePage </Text>
          <Text> Renderer with expo </Text>
          <StatusBar style="auto" />
        </View>
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
  head: {
    backgroundColor: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
});
