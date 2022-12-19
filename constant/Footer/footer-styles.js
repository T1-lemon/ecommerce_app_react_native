import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer:{
        position: 'absolute',
        flexDirection: 'row',
        paddingVertical: 10,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: "center",
        backgroundColor: '#fff',
        borderTopColor: '#fff',
        borderWidth:1,
    },
    logoFoter:{
        fontSize: 25,
        paddingHorizontal: 40,
    }
});

export default styles;