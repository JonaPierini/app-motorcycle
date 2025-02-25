import React from "react";
import { Button } from "react-native";

export type PropsCustomButton = {
  color: string;
  title: string;
  onPress: () => void;
};
export const CustomButton = ({ color, title, onPress }: PropsCustomButton) => {
  return <Button color={color} title={title} onPress={onPress} />;
};
