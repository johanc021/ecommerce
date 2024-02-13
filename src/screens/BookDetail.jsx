import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Carrousel from "../components/Carrousel.jsx";
import { addItem } from "../features/cartSlice.js";
import { colors } from "../global/colors.js";
import ToastManager from "toastify-react-native";
import { showToastsAddItem } from "../../assets/js/alerts.js";

const BookDetail = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  const bookDetail = route.params;
  const bookFound = useSelector((state) => state.shopReducer.bookSelected);
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    height < width ? setIsPortrait(false) : setIsPortrait(true);
  }, [height]);

  useEffect(() => {
    setIsLoading(false);
  }, [bookFound]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!bookFound) {
    return (
      <View style={styles.container}>
        <Text>Libro no encontrado</Text>
      </View>
    );
  }

  const onAddToCart = () => {
    dispatch(addItem({ ...bookFound, quantity: 1 }));
    showToastsAddItem();
  };

  return (
    <ScrollView>
      <View style={styles.detailContainerImage}>
        <ToastManager />
        <Carrousel />
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{bookFound.title}</Text>
          <Text style={styles.description}>{bookFound.description}</Text>
          <Text style={styles.price}>$ {bookFound.price}</Text>
          <TouchableOpacity
            style={isPortrait ? styles.buyButton : styles.buyAlt}
            onPress={onAddToCart}
          >
            <Text style={styles.buyText}>Agregar al Carrito</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailContainerImage: {
    marginTop: 10,
    alignItems: "center",
    minWidth: 300,
    marginBottom: 95,
  },
  detailContainer: {
    marginTop: 10,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  thumbnailPortrait: {
    width: "65%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  thumbnailLandscape: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  title: {
    fontFamily: colors.fonts.secondary,
    fontSize: 32,
  },
  description: {
    fontFamily: colors.fonts.primary,
    fontSize: 20,
    textAlign: "center",
  },
  price: {
    fontFamily: colors.fonts.secondary,
    fontSize: 32,
    color: colors.price,
    marginTop: 10,
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: "green",
    borderRadius: 10,
  },
  buyText: {
    color: "#fff",
    fontFamily: colors.fonts.secondary,
    fontSize: 18,
    padding: 3,
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
});
