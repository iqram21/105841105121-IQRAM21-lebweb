import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Shop = () => {
  return (
    <View style={styles.container}>
      <Text>shop</Text>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
