import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import styles from "../styles/productScreen-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProductScreen(props) {
  const { navigation, route } = props;
  const { id, name, price, uri, description } = route.params;
  const [count, setCount] = useState(1);
  const minus = () => setCount((prevCount) => prevCount - 1);
  const plus = () => setCount((prevCount) => prevCount + 1);
  const reviewData = [
    {
      id: "1",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
    {
      id: "2",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
    {
      id: "3",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
    {
      id: "4",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
    {
      id: "5",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
    {
      id: "6",
      name: "Thanh",
      comment: "sản phẩm này rất tốt, tôi rất thích",
      rating: "3",
    },
  ];

  const renderReview = () => {
    return reviewData.map((item, index) => {
      return (
        <View key={item.id} style={styles.reviewList}>
          <Text>
            <Image
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuzhCFDTv-c6wui7nh7k1JOaPdlOpfHNuhCKFXVYYVKhiSi8UZ9_iqqUhix6YIUINw-N0&usqp=CAU",
              }}
              style={{ width: 40, height: 40 }}
            />
            {item.name}
          </Text>
          <Text>
            {item.rating} <FontAwesome style={styles.starIcon} name="star" />
          </Text>
          <Text style={styles.commentText}>{item.comment}</Text>
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <FontAwesome
        style={styles.backIcon}
        name="chevron-left"
        onPress={() => navigation.navigate("HomeScreen")}
      ></FontAwesome>
      <View style={styles.content}>
        <ScrollView>
          <Image style={styles.productImg} source={{ uri }} />
          <View style={styles.productInf}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.groupPrice}>
              <Text style={styles.price}>
                <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                {price}
              </Text>
              <View style={styles.numberAddCart}>
                <TouchableOpacity onPress={count > 1 ? minus : null}>
                  <FontAwesome name="minus" style={styles.btnCount} />
                </TouchableOpacity>
                <Text style={styles.textCount}>{count}</Text>
                <TouchableOpacity onPress={plus}>
                  <FontAwesome name="plus" style={styles.btnCount} />
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
              <View>{renderReview()}</View>
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
        onPress={() => navigation.navigate("CartScreen")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
}
