import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style ={{
      //justifyContent: baris
      //alignItems: kolom
      flex: 1,
      marginTop: 250,
    }}>
    <View style={{
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignSelf: 'center',
      // marginTop: 500,
    }}>
    </View>
    </View>
    <View style ={{
      //justifyContent: baris
      //alignItems: kolom
      // flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <View style={{
      width: 100,
      height: 100,
      backgroundColor: 'blue',
      alignSelf: 'center',
    }}>
      </View>
      </View>
      </View>
  )

}
export default App
