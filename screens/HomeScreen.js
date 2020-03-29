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
  const [roomlist, setRoomlist] = useState([]);

  const getlist = async () => {
    const response = await fetch("http://localhost:4000/getevents");
    const myJSON = await response.json();
    setRoomlist(myJSON);
  };
  // .then(response => setRoomlist(response.json())

  const handletextInput = e => {
    setRoom(e.target.value);
  };

  const handlesubmit = e => {
    setRoomlist([...roomlist, room]);
  };

  console.log("###", room, roomlist);

  return (
    <ScrollView>
      <Text>Home Screen</Text>
      <TextInput
        style={Style.input}
        name="room"
        placeholder="Enter text"
        onChange={handletextInput}
        value={room}
      />
      <Button title="Go to Details" onPress={getlist} />
      {roomlist.length && (
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
      )}
    </ScrollView>
  );
}

const Style = StyleSheet.create({
  photo: {
    height: 50,
    width: 50
  },
  input: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 5
  }
});
