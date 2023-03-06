import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

import { useCallback, useEffect } from "react";
import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { store } from "./src/screens/redux/store";
import Main from "./src/components/main";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/fonts/Roboto/Roboto-Medium.ttf"),
  });

  SplashScreen.preventAutoHideAsync();
  // useEffect(() => {
  //   async function prepare() {

  //   }
  //   prepare();
  // }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!onLayoutRootView) {
    return null;
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Main />
      </View>
    </Provider>
  );
}
