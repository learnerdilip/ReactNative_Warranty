import React, { useState } from "react";
import { Style } from "../HomeScreen";
import { View, TextInput, StyleSheet, Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { sendLogin } from "../../store/user/action";

export default function Login({ navigation }) {
  const dispatch = useDispatch();

  const userstate = useSelector(reduxState => reduxState.user.token);

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    dispatch(sendLogin(loginData));
    setLoginData({ email: "", password: "" });
  };

  if (userstate) return navigation.navigate("Home");
  return (
    <View>
      <TextInput
        style={Style.input}
        name="email"
        value={loginData.email}
        onChange={handleChange}
      />
      <TextInput
        style={Style.input}
        name="password"
        value={loginData.password}
        onChange={handleChange}
      />
      <Button title="SUBMIT" onPress={handleSubmit} />
      <Text>Not registered? Go to Login</Text>
    </View>
  );
}
