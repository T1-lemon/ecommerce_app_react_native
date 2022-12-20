import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/congratsScreen-styles'
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function CongratsScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textSuccess}>
        SUCCESS!        
      </Text>
      <Image style={styles.logo} source={require('../assets/success.png')} />
      <FontAwesome style={styles.icon__success} name='check'/>
      <Text style={styles.paragraph}>       
        Your order will be delivered soon. 
        Thank you for choosing our app!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("OrderScreen")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Track your orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        style={styles.appButtonContainer}
      >
        <Text style={styles.appButtonText}>Back to home</Text>
      </TouchableOpacity>
      </View>
  )
}