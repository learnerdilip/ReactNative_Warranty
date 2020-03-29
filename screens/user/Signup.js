import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { Style } from "../HomeScreen";
import { useDispatch, useSelector } from "react-redux";
import { sendSignup } from "../../assets/store/user/action";

export default function Signup({ navigation }) {
  const dispatch = useDispatch();

  const userstate = useSelector(reduxState => reduxState.user.newUser);

  const initialFromData = {
    email: "",
    password: "",
    country: "",
    name: "",
    phone: null
  };

  const [signupData, setSignupData] = useState(initialFromData);

  const handleChange = e => {
    const { name, value } = e.target;
    setSignupData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    dispatch(sendSignup(signupData));
    setSignupData(initialFromData);
  };

  if (userstate) return navigation.navigate("Login");
  return (
    <View>
      <TextInput
        style={Style.input}
        name="email"
        value={signupData.email}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        name="password"
        value={signupData.password}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        name="name"
        value={signupData.name}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        name="country"
        value={signupData.country}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        name="phone"
        value={signupData.phone}
        onChange={handleChange}
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
    </View>
  );
}
