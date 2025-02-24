import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          title: "Mapit",
        }}
      />
    </SafeAreaProvider>
  );
};

export default Layout;
