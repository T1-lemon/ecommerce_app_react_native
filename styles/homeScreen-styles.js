import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        flexDirection: "column",
        flex: 1,
        width:'100%',
        height: '100%',
        backgroundColor: '#fff',
    },
    header:{
        position: 'absolute',
        width: '100%',
        top: 30,
        flex: 1,
    },
    search:{
        left: '5%',
        top: 30,
        fontSize:25,
        color:'#ccc',
        
    },
    inputSearch:{
        width: '80%',
        left: '15%',
        borderColor: '#ccc',
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
    },
    logoGroupHeader:{
        paddingRight: 10,
        width: '17%',
        textAlign: 'center',
        flex: 1,
        backgroundColor: '#3333333'
    },
    logoHeader:{
        paddingTop:5,
        marginLeft:5,
        fontSize: 25,
        textAlign: 'center',
        borderWidth: 1,
        width: 40,
        height:40,
        borderColor: '#F5F5F5',
        borderRadius:12,
        backgroundColor: '#F5F5F5',
    },
    logoName:{
        textAlign: 'center',
        fontSize: 13,
        color: '#999999',
    },
    listLogo:{
        flexDirection:'row',
        marginTop: '30%',
        paddingHorizontal: 10,
    },
    productList:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: '100%',
        top: 5,
        marginVertical: 10,
    },
    logoGroupProduct:{
        margin: '1%',
        minWidth: '48%',
        borderColor: '#ccc',
        backgroundColor: '#F5F5F5',
        borderWidth:1,
        borderRadius: 15,
    },
    productImg:{
        width: '100%', 
        height: 150, 
        resizeMode: 'cover', 
        borderRadius: 15,
    },
    productName:{
        maxWidth: 160,
        margin: 10,
    },
   
})

export default styles;