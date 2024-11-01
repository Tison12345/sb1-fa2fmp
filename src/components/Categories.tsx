import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const categories = [
  { id: 1, title: 'Pizza', image: 'https://picsum.photos/100' },
  { id: 2, title: 'Burger', image: 'https://picsum.photos/100' },
  { id: 3, title: 'Sushi', image: 'https://picsum.photos/100' },
  { id: 4, title: 'Indian', image: 'https://picsum.photos/100' },
  { id: 5, title: 'Chinese', image: 'https://picsum.photos/100' },
];

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category) => (
        <TouchableOpacity key={category.id} style={styles.category}>
          <Image source={{ uri: category.image }} style={styles.image} />
          <Text style={styles.title}>{category.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  category: {
    marginRight: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Categories;