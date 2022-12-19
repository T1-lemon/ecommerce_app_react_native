import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./header-style";

export default function Header(props) {
  const { title, navigator } = props;
  return (
    <View style={styles.header__block}>
      <View style={styles.header__block__icon}>
        <AntDesign name="left" size={20} color="black" />
      </View>
      <View>
        <Text style={styles.header__title}>{title}</Text>
      </View>
    </View>
  );
}
