import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MenuItem from '../components/MenuItem';

const RestaurantScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://picsum.photos/400/200' }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Restaurant Name</Text>
        <View style={styles.info}>
          <Icon name="star" size={20} color="#FFD700" />
          <Text style={styles.rating}>4.5</Text>
          <Text style={styles.cuisine}> • Italian • $$</Text>
        </View>
        <Text style={styles.address}>123 Main Street, City</Text>
        
        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Menu</Text>
          <MenuItem
            name="Margherita Pizza"
            description="Fresh tomatoes, mozzarella, basil"
            price="$12.99"
          />
          <MenuItem
            name="Pasta Carbonara"
            description="Creamy sauce with pancetta"
            price="$14.99"
          />
          <MenuItem
            name="Tiramisu"
            description="Classic Italian dessert"
            price="$6.99"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  rating: {
    marginLeft: 5,
    fontSize: 16,
  },
  cuisine: {
    fontSize: 16,
    color: '#666',
  },
  address: {
    color: '#666',
    marginBottom: 15,
  },
  menuSection: {
    marginTop: 20,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default RestaurantScreen;