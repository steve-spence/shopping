import React, { useRef, useEffect } from "react";
import { Animated, Text, StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

interface AnimatedTitleProps {
  onAnimationComplete: () => void;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  onAnimationComplete,
}) => {
  const titleScale = useRef(new Animated.Value(1)).current;
  const titleTranslateX = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      const centerToHeaderX = 0;
      // Move from center all the way to the top
      // Title starts at center (50%), so move up by ~47% to reach the very top
      const centerToHeaderY = -height * 0.76;
      const finalScale = 0.6;

      Animated.parallel([
        Animated.timing(titleScale, {
          toValue: finalScale,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateX, {
          toValue: centerToHeaderX,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateY, {
          toValue: centerToHeaderY,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        onAnimationComplete();
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            { scale: titleScale },
            { translateX: titleTranslateX },
            { translateY: titleTranslateY },
          ],
        },
      ]}
    >
      <Text style={styles.title}>ShopEasy</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: height * 0.5 - 24,
    left: 0,
    right: 0,
    alignItems: "center",
    zIndex: 1000,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#e0e0e0",
    textAlign: "center",
  },
});
