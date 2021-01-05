import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Flexbox!</Text>
      <View style={styles.parentStyle}>
        <View style={styles.viewOneStyle} />
        <View style={styles.viewTwoStyle} />
        <View style={styles.viewThreeStyle} />
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 4,
    borderRadius: 5,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'gray'
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#99FFFF',
    marginTop: 50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: '#FFCC99'
  }
});

export default BoxScreen;
