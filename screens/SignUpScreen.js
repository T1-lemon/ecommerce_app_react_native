import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "../styles/signUpScreen-styles";
import { Formik } from "formik";
import { SignupSchema } from "../validation/validaton";

export default function SignUpScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
    <View style={styles.logoGroup}>
      <Text style={styles.dash}></Text>
      <Image
        style={styles.logo}
        source={require("../assets/jolihouse.png")}
      />
      <Text style={styles.textWel}>WELCOME</Text>
    </View>

    <Formik
      initialValues={{
        userName: "",
        email: "",
        password: "",
        confirmPass: "",
        phone: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={() => navigation.navigate("HomeScreen")}
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
              <Text style={{ color: "#F10000", width: '80%' }}>{errors.userName}</Text>
            ) : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email ? (
              <Text style={{ color: "#F10000", width: '80%'  }}>{errors.email}</Text>
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
              <Text style={{ color: "#F10000", width: '80%'  }}>{errors.password}</Text>
            ) : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("confirmPass")}
              onBlur={handleBlur("confirmPass")}
              value={values.confirmPass}
            />
            {errors.confirmPass && touched.confirmPass ? (
              <Text style={{ color: "#F10000", width: '80%'  }}>{errors.confirmPass}</Text>
            ) : null}
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange("phone")}
              onBlur={handleBlur("phone")}
              value={values.phone}
            />
            {errors.phone && touched.phone ? (
              <Text style={{ color: "#F10000", width: '80%'  }}>{errors.phone}</Text>
            ) : null}
          </View>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>Sign up</Text>
          </TouchableOpacity>
          <Text style={styles.question}>
            Already have account?
            <Text
              style={styles.signin}
              onPress={() => navigation.navigate("LogInScreen")}
            >
              {" "}
              SIGN IN
            </Text>
          </Text>
        </View>
      )}
    </Formik>
  </View>
  )
}