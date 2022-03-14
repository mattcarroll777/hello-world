import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  Image,
  FlatList,
} from "react-native";

const DATA = [
  { name: "MattsRaspberryPI" },
  { name: "MattsSecurityCamera" },
  { name: "LivingRoomTV" },
  { name: "BedroomTV" },
  { name: "CarAlexa" },
];

export const AllMyDevicesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() => navigation.navigate("SingleDevice")}
          >
            {item.name}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  sectionHeader: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
});
