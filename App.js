import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import React from 'react';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style ={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{ 
        fontFamily: 'MetroBlack',
        }}>Metropolis</Text>
      <Text style={{
        fontFamily: 'MetroBold',
        }}>Okesih</Text>
      <Text style={{
        fontFamily: 'MetroLight',
        }}>Kuy</Text>
      <Text style={{
        fontFamily: 'MetroSemibold',
        }}>Yuk</Text>
    </View>
  );
}