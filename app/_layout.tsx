import "../global.css";
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { Provider } from "react-redux";
import { store } from "@/store/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" backgroundColor='transparent' translucent={true} />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}