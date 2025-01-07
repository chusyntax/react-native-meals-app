import { Text } from "react-native";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  return <Text>Meal Details Screen ({mealId})</Text>;
}

export default MealDetailsScreen;
