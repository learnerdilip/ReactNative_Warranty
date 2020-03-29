import React, { useState } from "react";
import {
  Button,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen({ navigation }) {
  const [room, setRoom] = useState("");

  const roomlist = ["Living Room", "Kitchen", "Bed Room", "Bathroom", "Garage"];

  return (
    <ScrollView>
      <Text style={Style.heading}>Warranty managing tool</Text>

      {/* {roomlist.length && (
        <FlatList
          style={{ color: "tomato", fontFamily: "sans-serif" }}
          data={roomlist}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <h3>{item.name}</h3>
              <Text>{item.description}</Text>
              <Image style={Style.photo} source={{ uri: item.imageUrl }} />
            </TouchableOpacity>
          )}
        />
      )} */}
    </ScrollView>
  );
}

export const Style = StyleSheet.create({
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10
  },
  heading: {
    fontSize: 25,
    color: "#808080",
    margin: "auto"
  }
});
