import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomError = ({ error }) => {
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default CustomError;

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});
