import { useMotorcycleById } from "@/presentation/hooks/useMotorcyclesById";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

const DetailScreen = () => {
  const { motorcycle, getDataMotorcycleById, loading, error } =
    useMotorcycleById();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  useEffect(() => {
    getDataMotorcycleById(id as string);
  }, [id]);

  if (loading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="yellow" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={globalStyles.container}>
        <Text>Error al cargar los detalles</Text>;
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "Detail",
          headerBackTitle: "Back",
        }}
      />
      {motorcycle?.coordenadas && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: motorcycle.coordenadas.latitud,
            longitude: motorcycle.coordenadas.longitud,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
        />
      )}
      <View style={{ height: 150 }}>
        <Text>Volver a la Pantalla A</Text>
        <Pressable onPress={() => router.push("/confirm")}>
          <Text>Ir a la Pantalla C</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
