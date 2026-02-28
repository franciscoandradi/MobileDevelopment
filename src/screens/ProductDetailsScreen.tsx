import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { api } from "../api/api";
import { Product } from "../types/Product";

export default function ProductDetailsScreen({ route }: any) {
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    api.get(`/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, []);

  if (!product) return null;

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ height: 200 }}
      />
      <Text style={{ fontSize: 20 }}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text>Preço: R$ {product.price}</Text>
      <Text>Desconto: {product.discountPercentage}%</Text>
    </View>
  );
}