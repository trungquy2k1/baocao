import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screen/OnboardingScreen';
import Signin from '../screen/Login/Signin';
import HomeScreen from '../screen/HomeScreen';
import AppStack from './AppStack';
import CcScreen from '../screen/Category/Chaucanh/CcScreen';
import ListProduce from '../screen/ListProduce';
import Chitietccvp from '../screen/Detail/Chitietccvp';
import ProfileScreen from '../screen/ProfileScreen';
import Danhmuc from '../screen/Danhmuc';
import DtHome from '../screen/Category/Dattrong/DtHome';
import PbHome from '../screen/Category/Phanbon/PbHome';
import Dungculamvuon from '../screen/Category/Dungcu/Dungculamvuon';
import LandingScreen from '../screen/Landing/LandingScreen';
import Signup from '../screen/Login/SignupScreen';
import Cart from '../screen/Cart';
import Chitietsp from '../screen/ChitietSP';
import Chitietcbangsgp from '../screen/Detail/Chitietbangsgp';
import Listccdb from '../screen/Category/Caycanhdeban/Listccdb';
import CcdbScreen from '../screen/Category/Caycanhdeban/CcdbHome';
import Listccvp from '../screen/Category/Caycanhvanphong/Listccvp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Home" component={AppStack} />
        <Stack.Screen name="Chitietccvp" component={Chitietccvp} />
        <Stack.Screen name="ListProduce" component={ListProduce} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Dattrong" component={DtHome} />
        <Stack.Screen name="Phanbon" component={PbHome} />
        <Stack.Screen name="Danhmuc" component={Danhmuc} />
        <Stack.Screen name="Dungcu" component={Dungculamvuon} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ChitietSP" component={Chitietsp} />
        <Stack.Screen name="chitietbangsgp" component={Chitietcbangsgp} />
           <Stack.Screen name="Listccdb" component={Listccdb} />
          <Stack.Screen name="CcdbScreen" component={CcdbScreen} />
          <Stack.Screen name="Listccvp" component={Listccvp} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
