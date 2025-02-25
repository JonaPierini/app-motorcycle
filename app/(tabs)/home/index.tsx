import { Card } from "@/presentation/components/Card";
import { ItemList } from "@/presentation/components/ItemList";
import { ScreenLayout } from "@/presentation/components/ScreenLayout";
import { useMotorcycles } from "@/presentation/hooks/useMotorcycles";
import { globalStyles } from "@/presentation/styles/globa-styles";
import { useRouter } from "expo-router";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

const HomeScreen = () => {
  const { motorcycles, loading, error } = useMotorcycles();
  const router = useRouter();

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
        <Text>Error al cargar</Text>;
      </View>
    );
  }

  return (
    <ScreenLayout>
      <FlatList
        data={motorcycles}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <Card onPress={() => router.push(`/detail/${item.id}`)}>
            <ItemList {...item}></ItemList>
          </Card>
        )}
      />
    </ScreenLayout>
  );
};
export default HomeScreen;
