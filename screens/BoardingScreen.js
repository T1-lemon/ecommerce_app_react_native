import { Text, ImageBackground } from "react-native";
import React from "react";
import styles from "../styles/boardingScreen-styles";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function BoardingScreen(props) {
  const { navigation } = props;
  const image = require("../assets/boarding.png");
  return (
    <ImageBackground
      source={image}
      resizeMode="stretch"
      style={styles.container}
    >
      <Text style={styles.title}>MAKE YOUR</Text>
      <Text style={styles.name}>JOLIE HOUSE</Text>
      <Text style={styles.description}>
        The best simple place where you discover most wonderful furnitures and
        make your home beautiful
      </Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("LogInScreen")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Get Start</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
