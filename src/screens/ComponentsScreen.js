import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "MihaiGhe";

  return (
    <View style={{flex: 1, alignItems: "center"}}>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.fontSize}>Made by {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    textAlign: "center"
  },
  headerStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
