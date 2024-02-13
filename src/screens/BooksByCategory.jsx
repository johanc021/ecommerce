import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
/* import booksData from "../data/books_data.json"; */
import BookItem from "../components/BookItem.jsx";
import { useState, useEffect } from "react";
import Search from "../components/Search.jsx";
import { useSelector } from "react-redux";
import { useGetBooksByGendersQuery } from "../services/shopServices.js";

const BooksByCategory = ({ navigation, route }) => {
  const [booksByGender, setBooksByGender] = useState([]);
  const [search, setSearch] = useState("");

  /* const { gender } = route.params; */

  const gender = useSelector((state) => state.shopReducer.categorySelected);
  const {
    data: booksData,
    isLoading,
    error,
  } = useGetBooksByGendersQuery(gender);
  useEffect(() => {
    if (!isLoading) {
      const booksValues = Object.values(booksData);
      const booksFiltered = booksValues.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
      setBooksByGender(booksFiltered);
    }
  }, [isLoading, gender, search]);

  const onSearch = (search) => {
    setSearch(search);
  };

  const renderBookItem = ({ item }) => (
    <BookItem book={item} navigation={navigation} />
  );

  return (
    <>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Search onSearchHandlerEvent={onSearch} />
          <FlatList
            style={styles.flatBooksByCategories}
            data={booksByGender}
            renderItem={renderBookItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </>
  );
};

export default BooksByCategory;

const styles = StyleSheet.create({
  flatBooksByCategories: {
    marginBottom: 95,
  },
});
