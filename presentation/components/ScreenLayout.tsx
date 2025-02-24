import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ScreenLayoutProps = {
  children: ReactNode; // Tipado para los elementos hijos
};
export const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {children}
    </View>
  );
};
