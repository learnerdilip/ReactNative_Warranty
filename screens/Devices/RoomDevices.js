import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import TestBanner from "./TestBanner";

export default function RoomDevices({ route, navigation }) {
  console.log("**PARAMS***", route.params);
  return (
    <ScrollView style={styles.devpage}>
      <TestBanner />
      <Button title="ADD DOCUMENT" />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  devpage: {
    height: "100%"
  }
});
