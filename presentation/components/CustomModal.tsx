import { View, Text, Modal, StyleSheet, Button } from "react-native";

export type PropsCustomModal = {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const CustomModal = ({
  visible,
  onClose,
  onConfirm,
}: PropsCustomModal) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.texto}>¿Confirmar solicitud de cita?</Text>
          <View style={styles.botones}>
            <Button title="Cancelar" onPress={onClose} color="#FF6347" />
            <Button title="Confirmar" onPress={onConfirm} color="#32CD32" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
