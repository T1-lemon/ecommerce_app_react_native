import { View } from "react-native";
import React from "react";
import styles from "./footer-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer(props) {
  const { navigation } = props;
  const dataFooter = [
    { key: "Home", logo: "home", page: "HomeScreen" },
    { key: "Cart", logo: "shopping-cart", page: "CartScreen" },
    { key: "Profile", logo: "user", page: "ProfileScreen" },
  ];

  const renderFooter = () => {
    return dataFooter.map((item) => {
      return (
        <View key={item.key} style={styles.logoGroupFooter}>
          <FontAwesome
            name={item.logo}
            style={styles.logoFoter}
            onPress={() => navigation.navigate(item.page, {
                page: item.page
            })}
          />
        </View>
      );
    });
  };
  return <View style={styles.footer}>{renderFooter()}</View>;
}
