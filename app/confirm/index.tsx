import { Stack } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const ConfirmScreen = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Confirm",
          headerBackTitle: "Back",
        }}
      />
      <Text>Confirm</Text>
    </View>
  );
};

export default ConfirmScreen;
