import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkout__container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  checkout__body: {
    paddingVertical: 15,
    marginTop: 30, 
    flex: 1,
  },
  checkout__footer: {
    marginBottom: 10,
  },
  card__address__container: {
    flex: 1, 
  },
  card__header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10, 
  },
  text__header: {
    fontSize: 15,
    color: "grey",
  },
  icon__header: {},
  card__body: {
    borderWidth: 1, 
    borderRadius: 10,
  },
  card__text__name: {
    paddingHorizontal: 10, 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
  }, 
  text__name: {
    fontSize: 15, 
    fontWeight: "bold",
  },
  card__text__address: {
    paddingHorizontal: 10, 
    paddingTop: 10, 
    paddingBottom: 30,  
  },
  text__address: {
    fontSize: 15, 
    color: "grey",
  },
  card__infor__order: {
    flex: 1, 
  },
  card__infor__header: {},
  text__infor__header: {
    fontSize: 15, 
    color: "grey",
  },
  card__infor__body: {
    borderWidth: 1, 
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10, 
    marginTop: 10,
  },
  box__text__order: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  text__body__infor: {
    fontSize: 15, 
    color: "grey"
  },
  text__body__infor__span: {
    fontSize: 15, 
    fontWeight: "bold",
  },
});
