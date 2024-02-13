import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font"
import { colors } from "./src/global/colors.js";
import { Provider } from "react-redux"
import store from "./src/store/index.js";
import MainNavigator from "./src/navigation/MainNavigator.jsx";
import { init } from "./src/db/index.js";

export default function App() {

  //inicializando db sqlite
  init().then(() => console.log("Db inicializada")).catch((error) => console.log(error))

  const [fontLoaded] = useFonts({
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
  })
  if (!fontLoaded) return <ActivityIndicator />

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.layout.background,
    height: "100%"
  }
})
