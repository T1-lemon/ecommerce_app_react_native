import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    marginTop: 40,
    width: "100%",
    height: "100%",
  },
  text:{
    fontSize: 17, 
    fontWeight: '600', 
    lineHeight: 18,
    marginBottom: 5,
    marginTop: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
    padding: 10,
    color: "#000",
    fontSize: 15,
  },
  content: {
    flex: 1,
  },
  productImg: {
    position: "relative",
    width: "100%",
    height: 400,
    top: 0,
    resizeMode: "cover",
  },
  productInf:{
    marginHorizontal: 10,
  },
  name: {
    marginTop: 10,
    fontWeight : '500',
    fontSize: 24,
    color: '#303030',
  },
  groupPrice:{
    flexDirection: 'row',
    flexWrap: "wrap",
    marginVertical: 10,
  },
  price: {
    fontWeight : '500',
    fontSize: 20,
    color: '#F14C4C',
  },
  numberAddCart:{
    flexDirection: 'row',
    right: 0,
    fontSize: 20,
    marginLeft: '30%',
  },
  btnCount:{
    fontSize: 20,
    borderColor: '#E0E0E0',
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  textCount:{
    fontSize: 20,
    paddingHorizontal: 20,
  },
  reviewTotal: {
    flexDirection: "row",
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 18,
  },
  starIcon:{
    fontSize: 20,
    color: '#F2C94C',
    paddingHorizontal: 5,
  },
  starText:{
    fontSize: 18,
    paddingRight: 15
  },
  description: {
    marginVertical: 5,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'justify',
    color: '#606060',
  },
  yourReview:{
    flexDirection: "row",
  },
  reviewInput:{
    borderColor: '#E0E0E0',
    borderWidth: 1,
    padding: 15,
    width: '85%',
  },
  btnReview: {
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: '15%'
  },
  btnReviewIcon:{
    fontSize: 18,
    color: "#242424",
    textAlign: "center",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#242424",
    borderRadius: 10,
    paddingVertical: 15,
    width: "70%",
    marginLeft: "15%",
    marginVertical: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default styles;
