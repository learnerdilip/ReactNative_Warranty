import React from "react";

import { StyleSheet, View } from "react-native";

export default function Room(props) {
  console.log(props);
  return (
    <View style={styles.card}>
      <h2>{props.name}</h2>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: "3rem"
  }
});
