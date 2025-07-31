import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Animated,
} from "react-native";
import { useState, useRef } from "react";
import {
  AnimatedTitle,
  Header,
  SearchBar,
  CategoryCard,
  ProductCard,
  PromoBanner,
} from "../src/components";
import { categories, featuredProducts } from "../src/data/mockData";
import { Category, Product } from "../src/types/index";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showContent, setShowContent] = useState(false);

  // Animation values
  const contentOpacity = useRef(new Animated.Value(0)).current;
  const headerButtonsOpacity = useRef(new Animated.Value(0)).current;

  const handleAnimationComplete = () => {
    setShowContent(true);
    Animated.parallel([
      Animated.timing(headerButtonsOpacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(contentOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderCategory = ({ item }: { item: Category }) => (
    <CategoryCard item={item} />
  );

  const renderProduct = ({ item }: { item: Product }) => (
    <ProductCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <AnimatedTitle onAnimationComplete={handleAnimationComplete} />

      {showContent && <Header opacity={headerButtonsOpacity} />}

      {showContent && (
        <Animated.View style={{ flex: 1, opacity: contentOpacity }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Welcome Header */}
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Welcome to</Text>
              <Text style={styles.appName}>ShopEasy</Text>
            </View>

            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Categories */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <View style={styles.categoriesContainer}>
                <FlatList
                  data={categories}
                  renderItem={renderCategory}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categoriesList}
                />
              </View>
            </View>

            {/* Featured Products */}
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Featured Products</Text>
                <TouchableOpacity>
                  <Text style={styles.seeAllText}>See All</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={featuredProducts}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.productsList}
              />
            </View>

            <PromoBanner />
          </ScrollView>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: "#b0b0b0",
    fontWeight: "400",
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e0e0e0",
    marginTop: 5,
  },
  section: {
    marginTop: 40,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#e0e0e0",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  seeAllText: {
    fontSize: 16,
    color: "#64b5f6",
    fontWeight: "600",
  },
  categoriesContainer: {
    paddingHorizontal: 20,
  },
  categoriesList: {
    paddingRight: 20,
  },
  productsList: {
    paddingHorizontal: 15,
  },
});
