import {
  FlatList,
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import OrderItem from "../components/OrderItem.jsx";
import { colors } from "../global/colors.js";
import { useGetOrdersQuery } from "../services/shopServices.js";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const localId = useSelector((state) => state.authReducer.localId);
  const { data, isLoading, error } = useGetOrdersQuery(localId);
  const [orderData, setOrderData] = useState([]);
  const [orderIdSelected, setOrderIdSelected] = useState("");
  const [orderSelected, setOrderSelected] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      const orderData = Object.values(data);
      setOrderData(orderData);
    }
  }, [data, isLoading]);

  useEffect(() => {
    const orderSelected = orderData.find(
      (order) => order.orderId === orderIdSelected
    );
    setOrderSelected(orderSelected);
  }, [orderIdSelected, orderData]);

  const renderOrderItem = ({ item }) => {
    return (
      <OrderItem
        order={item}
        setOrderId={setOrderIdSelected}
        setModalVisible={setModalVisible}
      />
    );
  };
  return (
    <>
      {orderData.length === 0 ? (
        <Text style={styles.emptyOrderText}>No hay órdenes disponibles</Text>
      ) : (
        <FlatList data={orderData} renderItem={renderOrderItem} />
      )}
      <Modal visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>DETALLE DE LA ORDEN</Text>
            {orderSelected ? (
              <>
                <Image
                  source={{ uri: orderSelected.cartItems[0]?.thumbnail }}
                  resizeMode="cover"
                  style={styles.orderImage}
                />
                <Text style={styles.modalText}>
                  Autor: ${orderSelected?.cartItems[0].author}
                </Text>
                <Text style={styles.modalText}>
                  Genero: {orderSelected?.cartItems[0].gender}
                </Text>
                <Text style={styles.modalText}>
                  Total: ${orderSelected?.total}
                </Text>
              </>
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}

            {
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>Cerrar</Text>
              </Pressable>
            }
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Orders;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  emptyOrderText: {
    fontSize: 20,
    fontFamily: colors.fonts.secondary,
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  orderImage: {
    width: 150,
    height: 230,
    borderRadius: 15,
    margin: 40,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontFamily: colors.fonts.primary,
    fontWeight: "bold",
  },
});
