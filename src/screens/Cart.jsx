import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartItem from "../components/CartItem";
import { colors } from "../global/colors";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePostOrderMutation } from "../services/shopServices.js";
import { removeItem, clearCart } from "../features/cartSlice.js";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import ToastManager from "toastify-react-native";
import {
  showToastsDeleteList,
  showToastsClearCart,
  showToastsBuyCart,
} from "../../assets/js/alerts.js";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  const total = useSelector((state) => state.cartReducer.total);
  const localId = useSelector((state) => state.authReducer.localId);
  const [triggerPost, result] = usePostOrderMutation();

  const confirmCart = () => {
    const createdAt = Date.now();
    triggerPost({
      total,
      cartItems,
      localId: localId,
      createdAt: createdAt,
      orderId: Math.ceil(Math.random(1, 10) * 1000),
    });
    dispatch(clearCart());
    showToastsBuyCart();
  };
  const dispatch = useDispatch();

  const handleDelete = (itemId) => {
    dispatch(removeItem(itemId));
    showToastsDeleteList();
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    showToastsClearCart();
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDelete} />
  );

  return (
    <View style={styles.cartContainer}>
      <ToastManager />
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>No hay productos en el carrito</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
          />

          <TouchableOpacity style={styles.confirmButton} onPress={confirmCart}>
            <AntDesign name="checkcircleo" size={24} color="white" />
            <Text style={styles.textConfirm}>Confirmar Carrito</Text>
          </TouchableOpacity>

          <View style={styles.cartConfirm}>
            <Text style={styles.totalPrice}>Total: COP {total}</Text>

            <TouchableOpacity
              style={styles.clearButton}
              onPress={handleClearCart}
            >
              <Feather name="trash-2" size={24} color="white" />
              <Text style={styles.textConfirm}>Vaciar Carrito</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  emptyCartText: {
    fontSize: 20,
    fontFamily: colors.fonts.secondary,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  cartConfirm: {
    marginBottom: 130,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  totalPrice: {
    fontSize: 16,
    fontFamily: colors.fonts.secondary,
  },
  clearButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.clearButton,
    padding: 10,
    borderRadius: 10,
  },
  confirmButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.buyButton,
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  textConfirm: {
    fontFamily: colors.fonts.secondary,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
