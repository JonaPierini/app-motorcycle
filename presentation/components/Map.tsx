import React from "react";
import { Motorcycles } from "@/types/motorcycles";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export type PropsMotorcycles = Partial<Motorcycles>;

export const Map = ({ coordenadas }: PropsMotorcycles) => {
  return (
    <>
      {coordenadas && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: coordenadas.latitud,
            longitude: coordenadas.longitud,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker
            coordinate={{
              latitude: coordenadas.latitud,
              longitude: coordenadas.longitud,
            }}
            title="Ubicación de la moto"
            description="Aquí está tu moto"
          />
        </MapView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
