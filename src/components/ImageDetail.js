import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";


const ImageDetail = ({ imageSource, imageScore, title }) => {
    return <View>
        <Image source={imageSource} style={{ width: 415, height: 200 }}
        />
        <Text>{title}</Text>
        <Text>Gif Score - {imageScore}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetail