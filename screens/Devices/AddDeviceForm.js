import React, { useState } from "react";
import {
  ScrollView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  Button
} from "react-native";
import { Style } from "../HomeScreen";
import * as ImagePicker from "expo-image-picker";

export default function AddDeviceForm() {
  const initialState = {
    room: "",
    device: "",
    expiry: "",
    purchase: "",
    image: "",
    notes: ""
  };
  const [devicedetails, setDevicedetails] = useState(initialState);
  const { device, expiry, purchase, image, notes } = devicedetails;

  const handleChange = e => {
    const { name, value } = e.target;
    setDevicedetails(prevState => ({ ...prevState, [name]: value }));
  };

  let [selectedImage, setSelectedImage] = useState(null);

  const openImagePickerAsync = async () => {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log("****PICKED IMAGE*******", pickerResult);
    setSelectedImage({ localUri: pickerResult.uri });
  };

  return (
    <ScrollView>
      <TextInput
        style={Style.input}
        placeholder="XXX"
        label="Device"
        value={device}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        label="Purchase Date"
        value={purchase}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        label="Expiry Date"
        value={expiry}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        label="Image"
        value={image}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        label="Notes"
        value={notes}
        onChange={handleChange}
      />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
        {selectedImage && (
          <View>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
          </View>
        )}
      </TouchableOpacity>
      <Button title="Submit" onPress={() => console.log("Submitted!")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    margin: "auto"
  }
});
