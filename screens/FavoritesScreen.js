// import { useContext } from "react";
// import { FavoriteContext } from "../store/context/favorite-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

function FavoritesScreen() {
  // const favoriteMealsCtx = useContext(FavoriteContext);

  const favoriteMealsCtx = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealsCtx.ids.includes(meal.id)
    favoriteMealsCtx.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;
