import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header.jsx";
import Profile from "../screens/Profile.jsx";
import ImageSelector from "../screens/ImageSelector.jsx";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={({ navigation, route }) => ({
        header: () => <Header title={route.name} navigation={navigation} />,
      })}
    >
      <Stack.Screen name="Perfil" component={Profile} />
      <Stack.Screen name="Seleccionar imagen" component={ImageSelector} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
