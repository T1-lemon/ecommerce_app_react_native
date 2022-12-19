import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container :{
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    dash :{
        backgroundColor: '#ccc',
        width: '80%',
        height: 1,
        top: 90,
        left: '10%',
        right: '10%',
    },
    logo: {
        width: 135,
        height: 114,
        left: 121,
        top: 30,
    },
    textWel:{
        width: 216,
        height: 90,
        left: '10%',
        top: 30,
        fontSize: 24,
        lineHeight:45,
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: 2,
        color: '#303030',
    },
    form:{
        left: '10%',
        flexDirection: 'column',
    },
    label:{
        width: 315,
        fontSize: 14,
        lineHeight: 20,
        color: '#909090',
        paddingVertical: 5,
    },
    input:{
        width: '80%',
        height:30,
        fontSize: 14,
        paddingLeft: 10,
        borderColor:'#E0E0E0',
        borderBottomWidth: 1 ,
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#242424",
        borderRadius: 10,
        paddingVertical: 15,
        width: "70%",
        marginLeft: "5%",
        marginTop: 40,
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        textAlign: "center",
        textTransform: "uppercase",
        fontWeight: '600',
      },
    question:{
        color:'#808080',
        left:'16%',
        marginTop: 10,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
    },
    signin:{
        color:'#303030',
        fontWeight: '700',
    }

})

export default styles;