import React from "react";
import { Text } from "react-native";
import { Link } from "expo-router";
import { Motorcycles } from "@/types/motorcycles";

export type PropsMotorcycles = Partial<Motorcycles & { showDetails?: boolean }>;

export const ItemList = ({
  id,
  nombre,
  showDetails = false,
  modelo,
  coordenadas,
}: PropsMotorcycles) => {
  return (
    <Link href={`/detail/${id}`} asChild>
      <Text style={{ textAlign: "center" }}>
        {nombre} - {id}
        {showDetails && (
          <>
            <Text>Modelo: {modelo}</Text>
            <Text>
              Lat: {coordenadas?.latitud} - Lng: {coordenadas?.longitud}
            </Text>
          </>
        )}
      </Text>
    </Link>
  );
};
