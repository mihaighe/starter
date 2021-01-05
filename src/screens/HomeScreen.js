import React from "react";
import { Text, StyleSheet, Image, View, Button } from "react-native";
import logo from "../images/react.png"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.width}>
      <Text style={styles.text}>React Native</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={logo}
      />
      <View style={styles.space}></View>
      <View style={styles.line} />
      <View style={styles.space}></View>
      <Button
        title="Go to Components Demo"
        onPress={() => navigation.navigate("Components")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Image Demo"
        onPress={() => navigation.navigate("Image")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Counter Demo"
        onPress={() => navigation.navigate("Counter")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Color Demo"
        onPress={() => navigation.navigate("Color")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Square Demo"
        onPress={() => navigation.navigate("Square")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Text Demo"
        onPress={() => navigation.navigate("Text")}
        color="black"
      />
      <View style={styles.space}></View>
      <Button
        title="Go to Box Demo"
        onPress={() => navigation.navigate("Box")}
        color="black"
      />
      <View style={styles.space}></View>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
  },
  width: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  space: {
    height: 5
  },
  line: {
    width: 250,
    borderBottomColor: 'black',
    borderBottomWidth: 4,
  }
});

export default HomeScreen;
