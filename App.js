import MainNavigator from "./navigation/MainNavigator";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import store from "./store/configStore";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator></MainNavigator>
    </Provider>
  );
}
