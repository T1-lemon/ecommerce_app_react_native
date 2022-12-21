import { View, Text, Button, Image } from "react-native";
import React from "react";
import { styles } from "../styles/detailOrderScreen-style";
import Header from "../components/Header/Header";
import Footer from "../constant/Footer/Footer";

export default function DetailOrderScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.order__container}>
      <Header title="Order detail" navigator="DetailOrderScreen" />
      <View style={styles.order__body}>
        <View style={styles.card__order__container}>
          <View style={styles.card__order__header}>
            <Text style={styles.text__order__id}>Order No 2385622312</Text>
            <Text style={styles.text__order__date}>20/3/2022</Text>
          </View>
          <View>
            <View style={styles.card__order__body}>
              <Image
                style={styles.img__order__detail}
                source={{ uri: "https://bom.so/zJcVf2" }}
              />
              <Text style={styles.text__order__quantity}>Ten san pham</Text>

              <Text style={styles.text__order__totalAmount}>
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>xxxxx
              </Text>
            </View>
            <View style={styles.card__order__body}>
              <Image
                style={styles.img__order__detail}
                source={{ uri: "https://bom.so/zJcVf2" }}
              />
              <Text style={styles.text__order__quantity}>Ten san pham</Text>

              <Text style={styles.text__order__totalAmount}>
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>xxxxx
              </Text>
            </View>
          </View>
          <Text style={styles.text__orderDetail__totalAmount}>
            Total:  {}
            <Text style={{ textDecorationLine: "underline" }}>đ</Text>xxxxx
          </Text>
        </View>
      </View>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}
