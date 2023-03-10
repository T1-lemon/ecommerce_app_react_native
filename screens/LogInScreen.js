import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import styles from "../styles/loginScreen-styles";
import { Formik } from "formik";
import { SignInSchema } from "../validation/validaton";
import { useDispatch } from "react-redux";
import { userLoginApi } from "../store/slices/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LogInScreen(props) {
  const { navigation } = props;

  const showToastLoginSucess = () => {
    ToastAndroid.show("Login Success, Welcome back!", ToastAndroid.SHORT);
  };

  const showToastLoginFail = () => {
    ToastAndroid.show(
      "Login Fail, Check your password or username!",
      ToastAndroid.SHORT
    );
  };

  const dispatch = useDispatch();
  const handleSubmitLogin = (dataLogin) => {
    const fetchLoginApi = async () => {
      await dispatch(userLoginApi(dataLogin));
      const message = await AsyncStorage.getItem("message");
      if (message === "loginFail") {
        showToastLoginFail();
      } else {
        showToastLoginSucess();
        navigation.navigate("HomeScreen");
      }
    };

    fetchLoginApi();
    // navigation.navigate("HomeScreen");
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.dash}></Text>
        <Image
          style={styles.logo}
          source={require("../assets/jolihouse.png")}
        />
        <Text style={styles.textHello}>Hello !</Text>
        <Text style={styles.textWel}>WELCOME BACK</Text>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={(values) => handleSubmitLogin(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.form}>
              <View style={styles.formGroup}>
                <Text style={styles.label}>User Name</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                />
                {errors.userName && touched.userName ? (
                  <Text style={{ color: "#F10000", width: "80%" }}>
                    {errors.userName}
                  </Text>
                ) : null}
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                {errors.password && touched.password ? (
                  <Text style={{ color: "#F10000", width: "80%" }}>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.appButtonContainer}
              >
                <Text style={styles.appButtonText}>Sign in</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text
                  style={styles.newAccount}
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  Create new account
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
