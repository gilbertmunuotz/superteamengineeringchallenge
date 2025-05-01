import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    // <Stack>
    //   <StatusBar style="auto" />
    //   <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //   <Stack.Screen name="+not-found" />
    // </Stack>
    <Stack>
      <Text>Hello world</Text>
    </Stack>
  );
}
