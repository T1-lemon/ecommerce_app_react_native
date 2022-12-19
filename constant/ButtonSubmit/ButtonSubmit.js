import { View, Text, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import { styles } from "./button-submit";

export default function ButtonSubmit(props) {
  const { navLink, navigation, title } = props;
  const [modalVisible, setModalVisible] = useState(false);

  const handlePressNavigate = () => {
    if (navigation !== "submitOrder") {
      navigation.navigate(navLink);
    }
    return;
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
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
