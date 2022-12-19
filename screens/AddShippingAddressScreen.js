import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../styles/addShippingAddressScreen-styles";
import ButtonSubmit from "../constant/ButtonSubmit/ButtonSubmit";

export default function AddShippingAddressScreen(props) {
  const { navigation } = props;

  return (
    <View style={styles.addShipping__container}>
      <Header title="Add shipping address" navigator="OrderScreen" />
      <SafeAreaView style={styles.form__input}>
        <View style={styles.block__text}>
          <Text style={styles.label__text}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your first's name"
          />
        </View>
        <View style={styles.block__text}>
          <Text style={styles.label__text}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your last's name"
          />
        </View>
        <View style={styles.block__text}>
          <Text style={styles.label__text}>Address</Text>
          <TextInput style={styles.input} placeholder="Enter your address" />
        </View>
        <View style={styles.block__text}>
          <Text style={styles.label__text}>Phone</Text>
          <TextInput style={styles.input} placeholder="Enter your phone" />
        </View>
      </SafeAreaView>
      <View style={styles.addShipping__footer}>
        <ButtonSubmit
          navLink=""
          navigation={navigation}
          title="save address"
          isCheck="saveAddress"
        />
      </View>
    </View>
  );
}
