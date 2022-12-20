import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import styles from "../styles/homeScreen-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Footer from "../constant/Footer/Footer";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProductsApi } from "../store/slices/productSlice";

export default function HomeScreen(props) {
  const { navigation, route } = props;
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApi = async () => {
      await dispatch(getAllProductsApi());
    };
    fetchApi();
  }, []);
  const dataLogo = [
    { id: "1", catagory: "Phổ biến", logo: "star" },
    { id: "2", catagory: "Sofa", logo: "sofa" },
    { id: "3", catagory: "Bàn làm việc", logo: "table-furniture" },
    { id: "4", catagory: "Đèn", logo: "desk-lamp" },
    { id: "5", catagory: "Đồng hồ", logo: "clock" },
    { id: "6", catagory: "Tủ âm tường", logo: "file-cabinet" },
  ];

  const renderLogo = () => {
    return dataLogo.map((item) => {
      return (
        <View key={item.id} style={styles.logoGroupHeader}>
          <Icon name={item.logo} style={styles.logoHeader} />
          <Text style={styles.logoName}>{item.catagory}</Text>
        </View>
      );
    });
  };

  const renderProduct = () => {
    return products.map((item) => {
      return (
        <Pressable
          key={item.id}
          onPress={() =>
            navigation.navigate("ProductScreen", {
              id: item.id,
              name: item.name,
              price: item.price,
              uri: item.image,
              description: item.description,
            })
          }
        >
          <View style={styles.logoGroupProduct}>
            <Image style={styles.productImg} source={{ uri: item.image }} />
            <View style={styles.productName}>
              <Text>{item.name}</Text>
              <Text>
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                {item.price}
              </Text>
            </View>
          </View>
        </Pressable>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="search" style={styles.search} />
        <TextInput style={styles.inputSearch}></TextInput>
      </View>

      <View style={styles.listLogo}>{renderLogo()}</View>

      <ScrollView>
        <View style={styles.productList}>{renderProduct()}</View>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}
