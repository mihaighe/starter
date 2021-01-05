import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Vash"
        imageSource={require("../../assets/vash.gif")}
        imageScore={8}
      />

      <ImageDetail
        title="Ryuk"
        imageSource={require("../../assets/ryuk.gif")}
        imageScore={7}
      />
      <ImageDetail
        title="Shiki"
        imageSource={require("../../assets/shiki.gif")}
        imageScore={9}
      />
    </View>
  );
};

const styles = StyleSheet.create();

export default ImageScreen;
