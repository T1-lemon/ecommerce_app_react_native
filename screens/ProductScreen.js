import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/productScreen-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useEffect } from "react";
import { getDetailService } from "../services/productService";
import { getProductDetailFeedBackService } from "../services/feedBackServices";
import { addProductToCartApi } from "../store/slices/cartSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from "react-redux";

export default function ProductScreen(props) {
  const showToast = () => {
    ToastAndroid.show("Add product to cart successfully!", ToastAndroid.SHORT);
  };

  const dispatch = useDispatch();
  const { navigation, route } = props;
  const { id, name, price, uri, description } = route.params;
  const [count, setCount] = useState(1);
  const [productDetail, setProductDetail] = useState({});
  const [loadingApi, setLoadingApi] = useState(false);

  useEffect(() => {
    const fetchDetailProductApi = async () => {
      setLoadingApi(true);
      const responeProduct = await getDetailService(id);
      const responeFeedBack = await getProductDetailFeedBackService(id);
      const productDetail = {
        name: responeProduct.data.name,
        image: responeProduct.data.image,
        price: responeProduct.data.price,
        description: responeProduct.data.description,
        category: responeProduct.data.Category.category_name,
        feedBack: responeFeedBack.data,
      };
      await setProductDetail(productDetail);
      setLoadingApi(false);
    };
    fetchDetailProductApi();
  }, []);

  const minus = () => setCount((prevCount) => prevCount - 1);
  const plus = () => setCount((prevCount) => prevCount + 1);

  const handleAddToCart = () => {
    const fetchAddProductToCartApi = async () => {
      const accessToken = await AsyncStorage.getItem('token');
      const dataCart = {
        id,
        price: productDetail.price,
        quantity: count,
        accessToken: JSON.parse(accessToken)
      };

      await dispatch(addProductToCartApi(dataCart));
      showToast();
    };
    fetchAddProductToCartApi();
  };
  const renderReview = () => {
    return loadingApi === true ? (
      <ActivityIndicator size="large" color="#21130d" />
    ) : productDetail.feedBack ? (
      productDetail.feedBack.map((item, index) => {
        return (
          <View key={index} style={styles.block__review__list}>
            <View style={styles.block__review__user}>
              <View>
                <Image
                  source={{
                    uri: `${item.avatar}`,
                  }}
                  style={{ width: 45, height: 45, borderRadius: 25 }}
                />
              </View>
              <View style={styles.block__review__rating}>
                <Text>{item.user_name}</Text>
                <Text style={styles.text__review__rating}>
                  {item.rating} (average rating)
                </Text>
              </View>
            </View>
            <View>
              <Text style={styles.commentText}>{item.comment_text}</Text>
            </View>
          </View>
        );
      })
    ) : (
      ""
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <View style={styles.header__block__imgProduct}>
            <TouchableOpacity
              style={styles.header__block__icon}
              onPress={() => navigation.navigate("HomeScreen")}
            >
              <AntDesign name="left" size={17} color="black" />
            </TouchableOpacity>
            <Image style={styles.productImg} source={{ uri }} />
          </View>
          <View style={styles.productInf}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.groupPrice}>
              <Text style={styles.price}>
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                {price}
              </Text>
              <View style={styles.numberAddCart}>
                <TouchableOpacity onPress={count > 1 ? minus : null}>
                  <AntDesign
                    name="minus"
                    size={15}
                    style={styles.btnCount}
                    color="black"
                  />
                </TouchableOpacity>
                <Text style={styles.textCount}>{count}</Text>
                <TouchableOpacity onPress={plus}>
                  <AntDesign
                    name="plus"
                    size={15}
                    style={styles.btnCount}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.reviewTotal}>
              <Text style={styles.starText}>
                <FontAwesome style={styles.starIcon} name="star" />
                4.5
              </Text>
            </View>
            <Text style={styles.text}>Mô tả sản phẩm</Text>
            <Text style={styles.description}>{description}</Text>

            <View style={{ marginBottom: 15 }}>
              <Text style={styles.text}>Đánh giá sản phẩm</Text>
              <ScrollView
                nestedScrollEnabled={true}
                style={styles.scroll__view__comment}
              >
                {renderReview()}
              </ScrollView>
              <Text style={styles.text}>Đánh giá của bạn</Text>
              <View style={styles.yourReview}>
                <TextInput
                  style={styles.reviewInput}
                  placeholder="Nhập đánh giá của bạn"
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate("")}
                  style={styles.btnReview}
                >
                  <FontAwesome
                    style={styles.btnReviewIcon}
                    name="send"
                  ></FontAwesome>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => handleAddToCart()}
        style={styles.btn__container}
      >
        <Text style={styles.btn__text}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}
