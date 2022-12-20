
import { View, Text, Image } from "react-native";
import React from "react";
import Footer from "../constant/Footer/Footer";
import styles from "../styles/profileScreen-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProfileScreen(props) {
  const { navigation } = props;
  const userData = [
    {
      id: "1",
      name: "Huyen Thoai",
      email: "huyenthoai@gmail.com",
      address: "123 abc",
      phone: "0912312312",
      uri: "https://bom.so/zJcVf2",
    },
  ];

  const renderUser = () => {
    return userData.map((item, index) => {
      return (
        <View key={item.id} style={styles.group__user}>
          <Image style={styles.img__user} source={{ uri: item.uri }} />
          <View style={styles.group__info}>
            <Text style={styles.text__name}>{item.name}</Text>
            <Text style={styles.text__email}>
              {item.email}
            </Text>
          </View>
          <FontAwesome
            style={styles.icon__edit}
            name="edit"
            onPress={() =>
              navigation.navigate("EditProfileScreen", {
                id: item.id,
                name: item.name,
                email: item.email,
                phone: item.phone,
                address: item.address,
              })
            }
          />
        </View>
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome
          style={styles.backIcon}
          name="chevron-left"
          onPress={() => navigation.navigate("HomeScreen")}
        ></FontAwesome>
        <Text style={styles.header__text}>Profile</Text>
        <FontAwesome
          style={[styles.backIcon, styles.align]}
          name="sign-out"
          onPress={() => navigation.navigate("BoardingScreen")}
        ></FontAwesome>
      </View>
      <View style={styles.content__user}>{renderUser()}</View>
      <View style={styles.myOrder__container}>
        <View style={styles.myOrder__text}>
        <Text style={styles.text__main}>My orders</Text>
        <Text style={styles.text__extra}>Already have 10 orders</Text>
        </View>
        <FontAwesome style={[styles.backIcon, styles.align]} name="chevron-right" onPress={() => navigation.navigate("OrderScreen")}/>
      </View>
      <View style={styles.myOrder__container}>
        <View style={styles.myOrder__text}>
        <Text style={styles.text__main}>Shipping Addresses</Text>
        <Text style={styles.text__extra}>03 Addresses</Text>
        </View>
        <FontAwesome style={[styles.backIcon, styles.align]} name="chevron-right" onPress={() => navigation.navigate("AddShippingAddressScreen")}/>
      </View>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}