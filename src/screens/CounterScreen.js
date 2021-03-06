import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PAYLOAD = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, counter: state.counter + action.payload };
    case "decrease_counter":
      return { ...state, counter: state.counter - action.payload };
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        color='#000000'
        title="Increase"
        onPress={() => dispatch({ type: "increase_counter", payload: PAYLOAD })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease_counter", payload: PAYLOAD })}
      />
      <Text style={styles.text}>Current Count: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default CounterScreen;
