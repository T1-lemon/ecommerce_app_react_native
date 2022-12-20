import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    padding: 10,
    marginTop: 40,
    justifyContent: "space-between",
  },
  header__text: {
    fontSize: 20,
  },
  backIcon: {
    width: 70,
    fontSize: 20,
    color: "#000",
  },
  group__user: {
    marginTop: 25,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  group__info: {
    width: 220,
    padding: 10,
  },
  text__name: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
    color: "#303030",
  },
  text__email: {
    marginTop: 5,
    color: "#808080",
    fontSize: 15,
    lineHeight: 18,
  },
  icon__edit: {
    padding: 10,
    fontSize: 25,
  },
  img__user: {
    width: 92,
    height: 92,
    borderRadius: 50,
  },
  myOrder__container: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: '#F4FFFF',
    marginHorizontal: 10,
    marginVertical: 25,
    paddingHorizontal: 10,
    paddingVertical: 25,
  },
  myOrder__text: {
  },
  text__main: {
    color: '#242424',
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    marginBottom: 5,
  },
  text__extra: {
    color: '#808080',
    fontSize: 12,
  },
  align: {
    textAlign: 'right', 
  }
});

export default styles;