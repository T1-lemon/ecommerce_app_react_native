import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./button-submit";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ButtonSubmit(props) {
  const { navLink, navigation, title, isCheck } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressNavigate = () => {
    isCheck === "submitOrder"
      ? setModalVisible(true)
      : isCheck === "saveAddress"
      ? handleSaveAddress()
      : navigation.navigate(navLink);
  };

  const handleSaveAddress = () => {
    console.log("abc");
    navigation.navigate("CheckoutScreen");
  };

  const handleSubmitOrder = () => {
    navigation.navigate("OrderScreen");
    setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure submit order !</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <MaterialCommunityIcons
                name="window-close"
                size={20}
                color="black"
              />
            </Pressable>
            <Pressable
              style={styles.btn__container}
              onPress={() => handleSubmitOrder()}
            >
              <Text style={styles.btn__text}>Continue Order</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.btn__container} onPress={handlePressNavigate}>
        <Text style={styles.btn__text}>{title}</Text>
      </Pressable>
    </View>
  );
}
