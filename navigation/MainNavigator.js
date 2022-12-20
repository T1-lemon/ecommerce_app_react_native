import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BoardingScreen from "../screens/BoardingScreen";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrderScreen from "../screens/OrderScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import AddShippingAddressScreen from "../screens/AddShippingAddressScreen";
import CongratsScreen from "../screens/CongratsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import Footer from "../constant/Footer/Footer";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllProductsApi } from "../store/slices/productSlice";
import { getAllCartItemApi } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BoardingScreen" component={BoardingScreen} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen
        name="AddShippingAddressScreen"
        component={AddShippingAddressScreen}
      />
      <Stack.Screen name="CongratsScreen" component={CongratsScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const MainNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchGetAllProductsApi = async () => {
      const tokenStorage = await AsyncStorage.getItem("token");
      const accessToken = tokenStorage !== null ? JSON.parse(tokenStorage) : null;
      await dispatch(getAllProductsApi());
      await dispatch(getAllCartItemApi(accessToken));
    };
    fetchGetAllProductsApi();
  }, []);

  return (
    <NavigationContainer>
      <StackNavigator></StackNavigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
