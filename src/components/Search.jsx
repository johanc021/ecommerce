import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { colors } from "../global/colors.js";

const Search = ({ onSearchHandlerEvent }) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const onSearchHandler = () => {
    const regex = /[^\w\sáéíóúÁÉÍÓÚüÜ]/;
    if (regex.test(searchInput.trim())) {
      setError("Solo se admiten letras y numeros");
      setSearchInput("");
    } else {
      setError("");
      onSearchHandlerEvent(searchInput);
    }
  };

  const onResetSearchHandler = () => {
    setSearchInput("");
    setError("");
    onSearchHandlerEvent("");
  };

  useEffect(() => {
    // Limpiar el mensaje de error después de 2 segundos
    const timeout = setTimeout(() => {
      setError("");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.textInputSearch}
          onChangeText={setSearchInput}
          placeholder="Buscar..."
          value={searchInput}
        />
        <TouchableOpacity
          onPress={() => {
            onSearchHandler(searchInput);
          }}
          style={styles.touchableButtonsSearch}
        >
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onResetSearchHandler();
          }}
        >
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  containerSearch: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 10,
  },
  textInputSearch: {
    width: "80%",
    fontSize: 19,
  },
  touchableButtonsSearch: {
    flexDirection: "row",
    gap: 10,
  },
  errorContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: colors.error,
    fontFamily: colors.fonts.secondary,
  },
});
