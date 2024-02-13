import { StyleSheet, FlatList, ActivityIndicator, View } from "react-native";
import GenderBook from "../components/GenderBook.jsx";
import { useSelector } from "react-redux";
import { useGetGendersQuery } from "../services/shopServices.js";
import CustomError from "../components/CustomError.jsx";

const Categories = ({ navigation }) => {
  const { data, isLoading, error } = useGetGendersQuery();

  const renderCategoryItem = ({ item }) => {
    return <GenderBook gender={item} navigation={navigation}></GenderBook>;
  };
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <>
      <FlatList
        style={styles.flatCategories}
        data={data}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
      />
      {error && <CustomError error={error.message} />}
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  flatCategories: {
    marginBottom: 95,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
