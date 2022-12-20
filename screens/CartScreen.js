import {
  View,
  Text,
  Button,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { styles } from "../styles/cartScreen-styles";
import { AntDesign } from "@expo/vector-icons";
import ButtonSubmit from "../constant/ButtonSubmit/ButtonSubmit";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteCartItemApi } from "../store/slices/cartSlice";

export default function CartScreen(props) {
  const { navigation } = props;
  const dispatch = useDispatch();

  const showToastDelete = () => {
    ToastAndroid.show("Delete Product Successfully!", ToastAndroid.SHORT);
  };

  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = useSelector((state) => state.cart.totalAmount);

  const removeProductFromCart = (id) => {
    const fetchRemoveProductFromCartApi = async () => {
      const tokenStorage = await AsyncStorage.getItem("token");
      accessToken = JSON.parse(tokenStorage);
      const dataCartDelete = {
        id,
        accessToken,
      };

      console.log(dataCartDelete);
      await dispatch(deleteCartItemApi(dataCartDelete));
      showToastDelete();
    };

    fetchRemoveProductFromCartApi();
  };
  return (
    <View style={styles.cart__container}>
      <Header title="My Cart" navigator="OrderScreen" />
      <ScrollView style={styles.cart__body}>
        {cartItems.length === 0 ? (
          <View>
            <Text>No item added to the cart</Text>
          </View>
        ) : (
          cartItems.map((item, index) => {
            return (
              <CartItem
                key={index}
                item={item}
                onRemoveProductFromCart={removeProductFromCart}
              />
            );
          })
        )}
      </ScrollView>

      <View style={styles.cart__footer}>
        <View style={styles.cart__checkout}>
          <ButtonSubmit
            navLink="CheckoutScreen"
            navigation={navigation}
            title="check out"
          />
        </View>
        <Text>abc</Text>
      </View>
    </View>
  );
}

const CartItem = (props) => {
  const { item, onRemoveProductFromCart } = props;

  return (
    <View style={styles.cart__card__container}>
      <View style={styles.cart__card__img}>
        <Image
          source={{
            uri: `${item.Product.image}`,
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.cart__card__content}>
        <Text style={styles.text__card__name}>{item.Product.name}</Text>
        <Text style={styles.text__card__price}>{item.Product.price}</Text>
        <Text style={styles.text__card__quantity}>
          Quantity:
          <Text style={styles.text__card__quantity__span}>
            {" "}
            {item.quantity}
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.cart__icon__close}
          onPress={() => onRemoveProductFromCart(item.id)}
        >
          <AntDesign name="closecircleo" size={18} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
