import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Bag = () => {
  return (
    <View style={styles.container}>
      <Text>Bag</Text>
    </View>
  );
};

export default Bag;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
