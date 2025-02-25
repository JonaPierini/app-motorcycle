import { useMotorcycleById } from "@/presentation/hooks/useMotorcyclesById";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

const DetailScreen = () => {
  const { motorcycle, getDataMotorcycleById, loading, error } =
    useMotorcycleById();
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [mostrarModal, setMostrarModal] = useState(false);
  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const confirmarCita = () => {
    alert("¡Cita solicitada con éxito!");
    cerrarModal();
  };

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
      <View style={{ height: 100, backgroundColor: "tomato" }}>
        <Button title="Volver" onPress={() => router.push("/home")} />
        <Button title="Solicitar Cita" onPress={abrirModal} />

        <Modal
          visible={mostrarModal}
          transparent
          animationType="slide"
          onRequestClose={cerrarModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.texto}>¿Confirmar solicitud de cita?</Text>
              <View style={styles.botones}>
                <Button
                  title="Cancelar"
                  onPress={cerrarModal}
                  color="#FF6347"
                />
                <Button
                  title="Confirmar"
                  onPress={confirmarCita}
                  color="#32CD32"
                />
              </View>
            </View>
          </View>
        </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    color: "white",
    marginBottom: 20,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});
