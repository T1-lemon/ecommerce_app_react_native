import { View, Text, Image, Button } from "react-native";
import React from "react";

export default function BoardingScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <Text>BoardingScreen</Text>
      <Image
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={{ width: 400, height: 400 }}
      />
      <Button
        title="abc"
        onPress={() => navigation.navigate("CartScreen")}
      ></Button>
      <Text>abcdef</Text>
      <Text>datag</Text>
    </View>
  );
}
