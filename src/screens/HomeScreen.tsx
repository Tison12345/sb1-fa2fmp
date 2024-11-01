import React from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar />
        <Categories />
        <FeaturedRow
          title="Featured Restaurants"
          description="Paid placements from our partners"
        />
        <FeaturedRow
          title="Trending Now"
          description="Hot spots everyone's talking about"
        />
        <FeaturedRow
          title="Offers Near You"
          description="Support your local restaurants"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
});

export default HomeScreen;