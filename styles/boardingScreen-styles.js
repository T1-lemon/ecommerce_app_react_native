import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container :{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title :{
        position: 'absolute',
        color : '#606060',
        width : 166,
        height: 30,
        left: '7%',
        top: '28%',
        fontSize : 24,
        lineHeight: 24,
        fontWeight : '600',
    },
    name:{
        position: 'absolute',
        color : '#303030',
        width : 224,
        height: 38,
        left: '7%',
        top: '35%',
        fontSize: 35,
        lineHeight: 38,
        fontWeight: '700',
    },
    description:{
        position: 'absolute',
        color : '#808080',
        width : 286,
        height: 105,
        left: '20%',
        top: '42%',
        fontSize: 15,
        lineHeight: 30,
        fontWeight: '400',
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#242424",
        borderRadius: 10,
        paddingVertical: 15,
        width: "50%",
        marginLeft: "25%",
        marginTop: 350,
      },
      appButtonText: {
        fontSize: 18,
        lineHeight: 24,
        color: "#fff",
        textAlign: "center",
        fontWeight: '600',
        textTransform: "uppercase",
      },
})

export default styles;