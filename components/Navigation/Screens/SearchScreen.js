import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar } from "react-native-elements";

export const SearchScreen = () => {
  const [value, setValue] = useState("");
  const [showCancel, setShowCancel] = useState(true);

  const onChange = (currentValue) => {
    setValue(currentValue);
  };

  const clear = () => {
    setValue("");
    setShowCancel(false);
  };

  return (
    <View style={{ marginTop: 30 }}>
      <SearchBar
        value={value}
        placeholder="Search..."
        onSubmit={(value) => Alert.alert(value)}
        onCancel={clear}
        onChange={onChange}
        cancelText="Cancel"
        showCancelButton={showCancel}
      />
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
  view: {
    margin: 10,
  },
});
