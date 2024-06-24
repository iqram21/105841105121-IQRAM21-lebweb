import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const ButtonCostum = ({text, color}) => {
  return (
    <View style ={{
      backgroundColor: 'color',
      width: 250,
      height: 100,
      borderRadius: 10,
      justifyContent: 'center',
      marginBottom: 10,
    }}>
      <Text style={{
        textAlign: 'center',
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
      }}>
        {text}
      </Text>

    </View>
  )

}

const TextInputCostum = ({placeholder,color,typeKeyboard}) => {
  return (
    <TextInput 
      placeholder={placeholder}
      keyboardType={typeKeyboard}

        style={{
          borderWidth: 1,
          width: 250,
          height: 40,
          borderColor: 'blue',
          marginBottom: 10,
          borderRadius: 10,
          paddingLeft: 10,
        }}></TextInput>
  )
}

const App = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
     <View>
      <TextInputCostum placeholder="Masukkan Nama" color="blue"/>
      <TextInputCostum placeholder="Masukkan Alamat" color="blue"/>
      <TextInputCostum placeholder="Masukkan Nomor Telepon" color="blue" typeKeyboard="numeric"/>
      </View>
    </View>
  )
}
export default App
