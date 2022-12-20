import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  editProfile__container: {},
  editProfile__label: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
  editProfile__body: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 15,
    color: '#808080',
  },
  input: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#242424',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#808080"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#242424",
    borderRadius: 10,
    paddingVertical: 15,
    width: "40%",
    marginLeft: "30%",
    marginTop: 30,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
export default styles;