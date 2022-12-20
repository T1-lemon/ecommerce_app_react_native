import { View, Text, Button } from "react-native";
import React from "react";
import { styles } from "../styles/orderScreen-style";
import Header from "../components/Header/Header";
import Footer from "../constant/Footer/Footer";

export default function OrderScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.order__container}>
      <Header title="My Order" navigator="OrderScreen" />
      <View style={styles.order__body}>
        <View style={styles.card__order__container}>
          <View style={styles.card__order__header}>
            <Text style={styles.text__order__id}>Order No 2385622312</Text>
            <Text style={styles.text__order__date}>20/3/2022</Text>
          </View>
          <View style={styles.card__order__body}>
            <Text style={styles.text__order__quantity}>
              Quantity: <Text style={styles.span__order__quantity}>03</Text>
            </Text>
            <Text style={styles.text__order__totalAmount}>
              Total Amount:{" "}
              <Text style={styles.span__order__totalAmount}>$150</Text>
            </Text>
          </View>
          <View style={styles.card__order__bottom}>
            <Button
              color="black"
              style={styles.button__order__detail}
              title="Detail"
            />
          </View>
        </View>
        <View style={styles.card__order__container}>
          <View style={styles.card__order__header}>
            <Text style={styles.text__order__id}>Order No 2385622312</Text>
            <Text style={styles.text__order__date}>20/3/2022</Text>
          </View>
          <View style={styles.card__order__body}>
            <Text style={styles.text__order__quantity}>
              Quantity: <Text style={styles.span__order__quantity}>03</Text>
            </Text>
            <Text style={styles.text__order__totalAmount}>
              Total Amount:{" "}
              <Text style={styles.span__order__totalAmount}>$150</Text>
            </Text>
          </View>
          <View style={styles.card__order__bottom}>
            <Button
              color="black"
              style={styles.button__order__detail}
              title="Detail"
            />
          </View>
        </View>
      </View>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}
