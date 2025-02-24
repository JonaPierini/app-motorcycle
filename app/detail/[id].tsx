import { Card } from "@/presentation/components/Card";
import { ItemList } from "@/presentation/components/ItemList";
import { ScreenLayout } from "@/presentation/components/ScreenLayout";
import { useMotorcycleById } from "@/presentation/hooks/useMotorcyclesById";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

const DetailScreen = () => {
  const { motorcycle, getDataMotorcycleById, loading, error } =
    useMotorcycleById();

  const { id } = useLocalSearchParams();

  useEffect(() => {
    getDataMotorcycleById(id as string);
  }, [id]);

  return (
    <ScreenLayout>
      <Stack.Screen
        options={{
          title: "Detail",
          headerBackTitle: "Back",
        }}
      />
      <Card>
        <ItemList {...motorcycle} showDetails />
      </Card>
    </ScreenLayout>
  );
};
export default DetailScreen;
