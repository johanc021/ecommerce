import { View, Image, StyleSheet, Dimensions } from "react-native";
import Swiper from "react-native-swiper";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

const Carrousel = () => {
  const images = useSelector((state) => state.shopReducer.bookSelected.images);
  return (
    <Swiper style={styles.container} showsButtons={true}>
      {images.map((image, index) => (
        <View key={index} style={styles.slide}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
    </Swiper>
  );
};

export default Carrousel;

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width,
    height: 300,
    borderRadius: 20,
  },
});
