import { Card } from "@/presentation/components/Card";
import { ItemList } from "@/presentation/components/ItemList";
import { ScreenLayout } from "@/presentation/components/ScreenLayout";
import { useMotorcycles } from "@/presentation/hooks/useMotorcycles";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { Stack } from "expo-router";
import { View, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { motorcycles, loading, error } = useMotorcycles();

  return (
    <ScreenLayout>
      <FlatList
        data={motorcycles}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <Card>
            <ItemList {...item}></ItemList>
          </Card>
        )}
      />
    </ScreenLayout>
  );
};
export default HomeScreen;
