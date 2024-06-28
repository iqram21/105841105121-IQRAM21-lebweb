import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ButtonCustom = ({ text, color}) =>{
    return (
        <View style = {{
            backgroundColor: color,
            width: 250,
            height: 50,
            borderRadius: 10,
            justifyContent: 'center',
            marginBottom: 10
        }}>
         <Text style = {{
            textAlign: 'center',
            color: 'white', 
            fontSize: 20,
            fontWeight: 'bold'
         }}>  
         </Text>
        </View>
    )
}

const TextInputCustom = ({placeholder, typeKeyboard}) =>{
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
            paddingLeft: 10
        }}
        />
    )
}
const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 20
        }}>Login
      </Text>
    <View>
    <TextInputCustom placeholder="Email" typeKeyboard="email-address"/>
    <TextInputCustom placeholder="Password" typeKeyboard="default"/>
    <View style={{ alignSelf: 'flex-end'}}>
      <Text style={{color: 'red', fontSize: 14}}>Forgot Password?</Text>
    </View>
    <ButtonCustom text="Login" color="red"/>
    <Text style={{
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16,
        color: '#888',
    }}> Or login with social account </Text>
        <View style={{ flexDirection:'row', justifyContent:'center'}}>
            <ButtonCustom text="Google" color="blue"/>
            <ButtonCustom text="Facebook" color="blue"/>
        </View>
        </View>
    </View>
  )
}

export default App