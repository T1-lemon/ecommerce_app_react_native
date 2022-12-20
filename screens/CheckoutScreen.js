import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/checkoutScreen-style";

import ButtonSubmit from "../constant/ButtonSubmit/ButtonSubmit";

export default function CheckoutScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.checkout__container}>
      <Header title="Check out" navigator="OrderScreen" />
      <View style={styles.checkout__body}>
        <View style={styles.card__address__container}>
          <View style={styles.card__header}>
            <Text style={styles.text__header}>Shipping Address</Text>
            <Pressable
              style={styles.icon__header}
              onPress={() => navigation.navigate("AddShippingAddressScreen")}
            >
              <MaterialCommunityIcons
                name="pencil-outline"
                size={18}
                color="black"
              />
            </Pressable>
          </View>
          <View style={styles.card__body}>
            <View style={styles.card__text__name}>
              <Text style={styles.text__name}>Huyenthoai Phan</Text>
            </View>
            <View style={styles.card__text__address}>
              <Text style={styles.text__address}>25 Ton Duc Thang Street</Text>
              <Text style={styles.text__address}>0987112376</Text>
            </View>
          </View>
        </View>
        <View style={styles.card__infor__order}>
          <View>
            <Text style={styles.text__infor__header}>Payment</Text>
          </View>
          <View style={styles.card__infor__body}>
            <View style={styles.box__text__order}>
              <Text style={styles.text__body__infor}>Order:</Text>
              <Text style={styles.text__body__infor__span}>95000 VND</Text>
            </View>
            <View style={styles.box__text__order}>
              <Text style={styles.text__body__infor}>Delivery:</Text>
              <Text style={styles.text__body__infor__span}>5000 VND</Text>
            </View>
            <View style={styles.box__text__order}>
              <Text style={styles.text__body__infor}>Total:</Text>
              <Text style={styles.text__body__infor__span}>100000 VND</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.checkout__footer}>
        <ButtonSubmit
          navLink=""
          navigation={navigation}
          title="submit order"
          isCheck="submitOrder"
        />
      </View>
    </View>
  );
}
