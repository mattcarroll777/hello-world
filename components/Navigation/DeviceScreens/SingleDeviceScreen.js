import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TabRouter } from 'react-navigation';

export const SingleDeviceScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ width: 250, backgroundColor: 'yellow' }}>
        <Text>Hello World!</Text>
        <Text> My Name is Matt</Text>
        <Text> Single Device </Text>
        <Text>{props.route.params.name}</Text>
        <Text>{props.route.params.program}</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
