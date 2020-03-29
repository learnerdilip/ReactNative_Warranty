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
import { roomlist } from "../assets/RoomDB";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Chip, Badge } from "react-native-paper";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [room, setRoom] = useState("");

  return (
    <ScrollView>
      <Text style={Style.headingText}>Warranty managing tool</Text>

      <FlatList
        data={roomlist}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={Style.roomcard}
            onPress={() => {
              navigation.push("Devices", {
                params: item
              });
            }}
          >
            <Text style={Style.h2}>
              {item.name}
              <Badge>90</Badge>
            </Text>
            <Text style={Style.h3}>{item.example}</Text>
            {/* <Image style={Style.photo} source={{ uri: "" }} /> */}
          </TouchableOpacity>
        )}
      />
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
  headingText: {
    fontSize: 25,
    color: "#808080",
    margin: "auto",
    paddingVertical: 15
  },
  homeheading: {
    color: "teal",
    margin: "auto"
  },
  h2: {
    color: "tomato",
    fontFamily: "sans-serif",
    margin: "auto",
    backgroundColor: "#FFF",
    padding: 10,
    width: "100%",
    fontSize: 25
  },
  h3: {
    padding: 10,
    backgroundColor: "#FFF"
  },
  roomcard: {
    marginVertical: 1
  }
});
