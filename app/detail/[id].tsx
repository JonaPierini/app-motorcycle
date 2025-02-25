import { CustomButton } from "@/presentation/components/CustomButton";
import { CustomModal } from "@/presentation/components/CustomModal";
import { Map } from "@/presentation/components/Map";
import { ScreenLayout } from "@/presentation/components/ScreenLayout";
import { useMotorcycleById } from "@/presentation/hooks/useMotorcyclesById";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DetailScreen = () => {
  const { motorcycle, getDataMotorcycleById, loading, error } =
    useMotorcycleById();
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

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
        <Map coordenadas={motorcycle.coordenadas}></Map>
      )}
      <View style={styles.footer}>
        <CustomButton
          color={"#fff"}
          title="Volver"
          onPress={() => router.push("/home")}
        />
        <CustomButton
          color={"#fff"}
          title="Solicitar Cita"
          onPress={abrirModal}
        />
        <CustomModal
          visible={mostrarModal}
          onClose={cerrarModal}
          onConfirm={() => {
            alert("¡Cita solicitada con éxito!");
            cerrarModal();
          }}
        />
      </View>
    </View>
  );
};
export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    height: 100,
    backgroundColor: "#dc172d",
  },
});
