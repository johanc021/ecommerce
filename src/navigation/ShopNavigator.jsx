import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Categories from "../screens/Categories.jsx";
import BooksByCategory from "../screens/BooksByCategory.jsx";
import BookDetail from "../screens/BookDetail.jsx";
import Header from "../components/Header.jsx";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categorías"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header title={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Categorías" component={Categories} />
      <Stack.Screen
        name="books"
        component={BooksByCategory}
        options={{
          title: "Libros",
        }}
      />
      <Stack.Screen
        name="Detalle"
        component={BookDetail}
        options={{
          title: "Detalle del libro",
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
