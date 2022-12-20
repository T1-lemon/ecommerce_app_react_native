import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header__block: {
        marginTop: 40, 
        flexDirection: "row", 
        justifyContent: "center", 
        alignContent: "center",
    }, 
    header__block__icon: {
        position: "absolute", 
        top: 0, 
        left: 5, 
    },
    header__title: {
        fontSize: 17, 
        fontWeight: "bold",
    },
})