import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style ={{
      //justifyContent: baris
      //alignItems: kolom
      flex: 1,
      justifyContent: 'center',
      alignItems:'center',

    }}>
    <View style={{
      flexDirection: 'row',
      justifyContent:'center',
      alignItems:'center'
    }}>
    <View style={{
      width: 110,
      height: 80,
      borderRadius: 20,
      backgroundColor: 'red',
      justifyContent:'center',
      alignItems:'center',
      marginRight: 20,
    }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Login</Text>
    </View>
    <View style={{
      width: 110,
      height: 80,
      borderRadius: 20,
      backgroundColor: 'blue',
      justifyContent:'center',
      alignItems:'center'
    }}>
      <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Sign In</Text>
      </View>
      </View>
      </View>
  )

}
export default App
