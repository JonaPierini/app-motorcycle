import React from "react";
import { Motorcycles } from "@/types/motorcycles";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface LatLng {
  latitude: number;
  longitude: number;
}
interface Props {
  initialLocation: LatLng;
  showUserLocation?: boolean;
}

export const Map = ({ initialLocation, showUserLocation = true }: Props) => {
  return (
    <>
      {initialLocation && (
        <MapView
          style={styles.map}
          showsUserLocation={showUserLocation}
          initialRegion={{
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: initialLocation.latitude,
              longitude: initialLocation.longitude,
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
