import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const PromoBanner: React.FC = () => {
  return (
    <TouchableOpacity style={styles.banner}>
      <View style={styles.content}>
        <Text style={styles.title}>Special Offer!</Text>
        <Text style={styles.subtitle}>Get 20% off on your first order</Text>
        <Text style={styles.code}>Use code: WELCOME20</Text>
      </View>
      <Text style={styles.icon}>🎉</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#64b5f6",
    marginHorizontal: 20,
    marginTop: 30,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#90caf9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#e3f2fd",
    marginBottom: 5,
  },
  code: {
    fontSize: 12,
    color: "#ffd93d",
    fontWeight: "600",
  },
  icon: {
    fontSize: 40,
  },
});
