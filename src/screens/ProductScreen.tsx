import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CategoryScreen from "./CategoryScreen";

const Tab = createMaterialTopTabNavigator();

export default function ProductsScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Masculino"
        children={() => (
          <CategoryScreen
            categories={["mens-shirts", "mens-shoes", "mens-watches"]}
          />
        )}
      />
      <Tab.Screen
        name="Feminino"
        children={() => (
          <CategoryScreen
            categories={[
              "womens-bags",
              "womens-dresses",
              "womens-jewellery",
              "womens-shoes",
              "womens-watches",
            ]}
          />
        )}
      />
    </Tab.Navigator>
  );
}