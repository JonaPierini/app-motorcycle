import { PropsWithChildren } from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { View } from "react-native";

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  height?: number;
  onPress?: () => void;
}

export const Card = ({ style, children, height, onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.mainView, style, { height }]}>{children}</View>
    </Pressable>
  );
};

export interface ThemeColors {
  cardBackground: string;
}
export const colors: ThemeColors = {
  cardBackground: "#fff",
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
