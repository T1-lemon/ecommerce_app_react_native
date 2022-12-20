import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  order__container: {
    width: "100%",
    height: "100%",
  },
  order__body: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  card__order__container: {
    borderWidth: 1,
    borderColor: "#21130d",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
  },
  card__order__header: {
    borderBottomWidth: 1,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text__order__id: {
    fontWeight: "bold",
  },
  text__order__date: {
    color: "grey",
  },
  card__order__body: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  text__order__quantity: {
    color: "grey",
  },
  span__order__quantity: {
    fontWeight: "bold",
    color: "black",
  },
  text__order__totalAmount: {
    color: "grey",
  },
  span__order__totalAmount: {
    fontWeight: "bold",
    color: "black",
  },
  card__order__bottom: {},
  button__order__detail: {},
});
