import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cart__container: {
    flex: 1,
  },
  cart__body: { flex: 1,
    paddingHorizontal: 20,
  },
  cart__card__container: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  cart__card__img: {
    flex: 1,
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "contain",
  },
  cart__card__content: {
    flex: 3,
    marginLeft: 10,
    flexDirection: "column",
  },
  text__card__name: {
    fontSize: 15,
    color: "grey",
  },
  text__card__price: {
    fontSize: 17,
    fontWeight: "bold",
  },
  text__card__quantity: {
    fontSize: 15,
    color: "grey",
  },
  text__card__quantity__span: {
    color: "black",
    fontWeight: "blod",
  },
  cart__icon__close: {
    position: "absolute",
    top: 2,
    right: 10,
  },
  cart__checkout: {
    // flex: 2,
  },
  cart__footer: {
    // flex: 1,
    paddingHorizontal: 20,
  },
  btn__checkout: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  btn__text: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
});
