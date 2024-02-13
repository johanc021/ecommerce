import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import ShopNavigator from "./ShopNavigator.jsx";
import CartNavigator from "./CartNavigator.jsx";
import OrdersNavigator from "./OrdersNavigator.jsx";
import ProfileNavigator from "./ProfileNavigator.jsx";
import { colors } from "../global/colors.js";
import { Entypo, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="ShopStack"
        component={ShopNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="shop" size={28} color={focused ? "#fff" : "#ccc"} />
          ),
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="shoppingcart"
              size={28}
              color={focused ? "#fff" : "#ccc"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderStack"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="shopping-bag"
              size={28}
              color={focused ? "#fff" : "#ccc"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo name="user" size={28} color={focused ? "#fff" : "#ccc"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.primary,
    shadowColor: "#ccc",
    elevation: 1,
    position: "absolute",
    left: 25,
    right: 25,
    bottom: 25,
    height: 60,
    borderRadius: 20,
  },
});
