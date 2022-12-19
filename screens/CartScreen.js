import { View, Text, Button, Image, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { styles } from "../styles/cartScreen-styles";
import { AntDesign } from "@expo/vector-icons";
import ButtonSubmit from "../constant/ButtonSubmit/ButtonSubmit";

export default function CartScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.cart__container}>
      <Header title="My Cart" navigator="OrderScreen" />
      <View style={styles.cart__body}>
        <View style={styles.cart__card__container}>
          <View style={styles.cart__card__img}>
            <Image
              source={{
                uri: "https://nhaxinh.com/wp-content/uploads/2022/05/Sofa-Miami-2-cho-vai-xam.jpg",
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.cart__card__content}>
            <Text style={styles.text__card__name}>Minimal Stand</Text>
            <Text style={styles.text__card__price}>250000 VND</Text>
            <Text style={styles.text__card__quantity}>
              Quantity:
              <Text style={styles.text__card__quantity__span}> 1</Text>
            </Text>
            <View style={styles.cart__icon__close}>
              <AntDesign name="closecircleo" size={18} color="black" />
            </View>
          </View>
        </View>
        <View style={styles.cart__card__container}>
          <View style={styles.cart__card__img}>
            <Image
              source={{
                uri: "https://nhaxinh.com/wp-content/uploads/2022/05/Sofa-Miami-2-cho-vai-xam.jpg",
              }}
              style={styles.img}
            />
          </View>
          <View style={styles.cart__card__content}>
            <Text style={styles.text__card__name}>Minimal Stand</Text>
            <Text style={styles.text__card__price}>250000 VND</Text>
            <Text style={styles.text__card__quantity}>
              Quantity:
              <Text style={styles.text__card__quantity__span}> 1</Text>
            </Text>
            <View style={styles.cart__icon__close}>
              <AntDesign name="closecircleo" size={18} color="black" />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.cart__checkout}>
        <ButtonSubmit
          navLink="CheckoutScreen"
          navigation={navigation}
          title="check out"
        />
      </View>
      <View style={styles.cart__footer}>
        <Text>abc</Text>
      </View>
    </View>
  );
}
