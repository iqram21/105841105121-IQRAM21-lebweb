import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import LoginPage from './tampilan_awal/LoginPage';
import HomePage from './tampilan/Home';
import ShopPage from './tampilan/Shop';
import BagPage from './tampilan/Bag';
import FavoritPage from './tampilan/Favorit';
import ProfilPage from './tampilan/Profil';
import HomeAktif from './assets/home-activated.png';
import HomeInaktif from './assets/home-inactive.png';
import Shop from './assets/shop-activated.png';
import ShopInaktif from './assets/shop-inactive.png';
import Bag from './assets/bag-activated.png';
import BagInaktif from './assets/bag-inactive.png';
import Favorit from './assets/favorites-activated.png';
import FavoritInaktif from './assets/favorites-inactive.png';
import Profil from './assets/profil-activated.png';
import ProfilInaktif from './assets/profil-inactive.png';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? HomeAktif : HomeInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Shop : ShopInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bag"
        component={BagPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Bag : BagInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorit"
        component={FavoritPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Favorit : FavoritInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilPage}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Profil : ProfilInaktif}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;