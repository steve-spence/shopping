import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { Category } from "../types/index";

const { width } = Dimensions.get("window");

interface CategoryCardProps {
  item: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.icon}>{item.icon}</Text>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2a2a2a",
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginHorizontal: 8,
    borderRadius: 15,
    alignItems: "center",
    flex: 1,
    borderWidth: 1,
    borderColor: "#404040",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  icon: {
    fontSize: 30,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: "600",
    color: "#e0e0e0",
    textAlign: "center",
  },
});
