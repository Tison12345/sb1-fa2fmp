import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import RestaurantCard from './RestaurantCard';

interface FeaturedRowProps {
  title: string;
  description: string;
}

const FeaturedRow = ({ title, description }: FeaturedRowProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
      >
        <RestaurantCard
          name="Pizza Palace"
          rating={4.5}
          cuisine="Italian"
          image="https://picsum.photos/200"
        />
        <RestaurantCard
          name="Burger Hub"
          rating={4.2}
          cuisine="American"
          image="https://picsum.photos/200"
        />
        <RestaurantCard
          name="Sushi Master"
          rating={4.7}
          cuisine="Japanese"
          image="https://picsum.photos/200"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  scrollView: {
    paddingHorizontal: 15,
  },
});

export default FeaturedRow;