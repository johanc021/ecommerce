import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator.jsx";
import AuthNavigator from "./AuthNavigator.jsx";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetProfilePictureQuery,
  useGetUserLocationQuery,
} from "../services/shopServices.js";
import {
  setProfilePicture,
  setUser,
  setUserLocation,
} from "../features/authSlice.js";
import { useEffect } from "react";
import { fetchSessions } from "../db/index.js";

const MainNavigator = () => {
  const user = useSelector((state) => state.authReducer.user);
  const localId = useSelector((state) => state.authReducer.localId);
  const { data, isLoading, error } = useGetProfilePictureQuery(localId);

  const {
    data: locationData,
    error: locationError,
    isLoading: isLocationloading,
  } = useGetUserLocationQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data?.image));
    }
    if (locationData) {
      dispatch(setUserLocation(locationData));
    }
  }, [data, error, locationData, isLoading]);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSessions();
        console.log("Session:", session);
        if (session?.rows.length) {
          console.log("Se han encontrado datos de usuario");
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log(
          "Error al obtener datos del usuario local: ",
          error.message
        );
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
