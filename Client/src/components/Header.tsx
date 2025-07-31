import React from "react";
import { View, Text, Pressable, Animated, StyleSheet } from "react-native";
import { router } from "expo-router";

interface HeaderProps {
  opacity: Animated.AnimatedValue;
}

export const Header: React.FC<HeaderProps> = ({ opacity }) => {
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.headerRight}>
        <Pressable
          style={styles.actionButton}
          onPress={() => router.push("/cart" as any)}
        >
          <Text style={styles.actionIcon}>🛒</Text>
          <Text style={styles.actionText}>Cart</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={() => router.push("/profile" as any)}
        >
          <Text style={styles.actionIcon}>👤</Text>
          <Text style={styles.actionText}>Profile</Text>
        </Pressable>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    minHeight: 56,
    marginTop: 30,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionButton: {
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  actionIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  actionText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#e0e0e0",
  },
});
