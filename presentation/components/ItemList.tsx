import React from "react";
import { Text } from "react-native";
import { Motorcycles } from "@/types/motorcycles";

export type PropsMotorcycles = Partial<Motorcycles & { showDetails?: boolean }>;

export const ItemList = ({ id, modelo }: PropsMotorcycles) => {
  return (
    <Text style={{ textAlign: "center" }}>
      {modelo} - {id}
    </Text>
  );
};
