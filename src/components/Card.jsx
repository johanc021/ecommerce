import { View, StyleSheet } from "react-native";
import { colors } from "../global/colors.js";

const Card = ({ children, style }) => {
  return <View style={{ ...styles.container, ...style }}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card.background,
    shadowColor: colors.card.shadow,
    shadowOffset: {
      height: 5,
      width: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 5,
  },
});
