import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.locationContainer}>
        <Icon name="location-on" size={24} color="#E23744" />
        <Text style={styles.location}>Current Location</Text>
        <Icon name="keyboard-arrow-down" size={24} color="#E23744" />
      </View>
      <Icon name="person-outline" size={24} color="#E23744" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 5,
  },
});

export default Header;