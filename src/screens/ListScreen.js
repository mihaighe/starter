import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Balloon", emoji: '🎈' },
    { name: "Bomb", emoji: '💣' },
    { name: "Brick", emoji: '🧱' },
    { name: "Watch", emoji: '⌚' },
    { name: "Gem", emoji: '💎' },
    { name: "Telephone", emoji: '📞' },
    { name: "Mouse", emoji: '🖱️' },
    { name: "Bulb", emoji: '💡' },
    { name: "Book", emoji: '📗' },
    { name: "Money", emoji: '💰' },
    { name: "Pen", emoji: '✒️' },
    { name: "Magnet", emoji: '🧲' },
    { name: "Pill", emoji: '💊' },
    { name: "Shield", emoji: '🛡️' },
    { name: "Paperclip", emoji: '📎' },
    { name: "Owl", emoji: '🦉' },


  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} {item.emoji}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    marginVertical: 20,
    textAlign: "center",
    fontSize: 20,
  },
});

export default ListScreen;
