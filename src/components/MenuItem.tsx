import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
}

const MenuItem = ({ name, description, price }: MenuItemProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E23744',
  },
});

export default MenuItem;