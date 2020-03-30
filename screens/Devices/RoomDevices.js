import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { FAB } from "react-native-paper";
import TestBanner from "./TestBanner";

export default function RoomDevices({ route, navigation }) {
  console.log("**PARAMS***", route.params);

  return (
    <ScrollView style={styles.devlist}>
      <TestBanner />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => navigation.navigate("AddDevice")}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    display: "block",
    margin: 26,
    right: 0,
    bottom: 0,
    top: 500,
    height: 50,
    width: 50
  },
  devlist: {}
});
