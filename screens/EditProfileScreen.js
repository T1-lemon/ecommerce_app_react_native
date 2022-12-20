import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header/Header";
import styles from "../styles/editProfileScreen-styles";
import { TextInput } from "react-native-gesture-handler";

export default function EditProfileScreen(props) {
  const { navigation, route } = props;
  const { id, name, email, phone, address } = route.params;
  return (
    <View style={styles.editProfile__container}>
      <Header title="Edit profile" />
      <View style={styles.editProfile__body}>
        <View style={styles.editProfile__info}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input}>{name}</TextInput>
        </View>
        <View style={styles.editProfile__info}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input}>{email}</TextInput>
        </View>
        <View style={styles.editProfile__info}>
          <Text style={styles.label}>Pass</Text>
          <TextInput style={styles.input}>**********</TextInput>
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput style={styles.input}>{address}</TextInput>
        </View>
        <View style={styles.editProfile__info}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput style={styles.input}>{phone}</TextInput>
        </View>
        <TouchableOpacity
        onPress={() => navigation.navigate("ProfileScreen")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}