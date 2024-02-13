import { Text, TouchableOpacity, StyleSheet, Image, View } from "react-native";
import { colors } from "../global/colors.js";
import { useDispatch } from "react-redux";
import { setBookIdSelected, setBookSelected } from "../features/shopSlice.js";

const BookItem = ({ navigation, book }) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={styles.containerBookItem}
      onPress={() => {
        dispatch(setBookIdSelected(book.id));
        dispatch(setBookSelected(book.id));
        navigation.navigate("Detalle", book.id);
      }}
    >
      <View>
        <Image
          style={styles.bookImage}
          resizeMode="cover"
          source={{ uri: book.thumbnail }}
        />
      </View>
      <View style={styles.descriptionBook}>
        <Text style={styles.bookTitle}>{book.title.toUpperCase()}</Text>
        <Text style={styles.bookAtributes}>Autor : {book.author}</Text>
        <Text style={styles.bookAtributes}>Editorial: {book.editorial}</Text>
        <Text style={styles.bookAtributes}>Precio: {book.price}</Text>
        <Text style={styles.bookAtributes}>Stock: {book.stock}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  containerBookItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 10,
    gap: 15,
  },
  bookTitle: {
    fontSize: 19,
    fontFamily: colors.fonts.secondary,
  },
  bookImage: {
    width: 150,
    height: 230,
    borderRadius: 15,
  },
  descriptionBook: {
    flex: 1,
    justifyContent: "center",
  },
  bookAtributes: {
    marginTop: 10,
    fontFamily: colors.fonts.primary,
    fontSize: 20,
  },
});
