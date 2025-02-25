import { Card } from "@/presentation/components/Card";
import { ItemList } from "@/presentation/components/ItemList";
import { ScreenLayout } from "@/presentation/components/ScreenLayout";
import { useMotorcycles } from "@/presentation/hooks/useMotorcycles";
import { FlatList } from "react-native";

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
