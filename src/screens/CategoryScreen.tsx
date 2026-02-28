import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Image, Text } from "react-native";
import { api } from "../api/api";
import { Product } from "../types/Product";
import { useNavigation } from "@react-navigation/native";

interface Props {
  categories: string[];
}

export default function CategoryScreen({ categories }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const navigation = useNavigation<any>();

  useEffect(() => {
    const fetchProducts = async () => {
      let allProducts: Product[] = [];

      for (let category of categories) {
        const response = await api.get(`/products/category/${category}`);
        allProducts = [...allProducts, ...response.data.products];
      }

      setProducts(allProducts);
    };

    fetchProducts();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Details", { id: item.id })}
        >
          <View style={{ padding: 10 }}>
            <Image
              source={{ uri: item.thumbnail }}
              style={{ height: 120 }}
            />
            <Text>{item.title}</Text>
            <Text>R$ {item.price}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}