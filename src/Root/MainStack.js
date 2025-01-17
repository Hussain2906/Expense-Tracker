import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigation from './TabScreen';
import HomeScreen from '../Views/HomeScreens/HomeScreen';
import Stats from '../Views/HomeScreens/Stats';
import MenuScreen from '../Views/Screens/MenuScreen';
import AllExpense from '../Views/HomeScreens/AllExpense';
import ProfileScreen from '../Views/HomeScreens/ProfileScreen';
import AddExpense from '../Views/HomeScreens/AddExpense';


const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='TabNavigation'>
      <Stack.Screen name='TabNavigation' component={TabNavigation} options={{headerShown:false}}/>
      
      <Stack.Screen name='AllExpense' component={AllExpense} />
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='Sats' component={Stats}/>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      <Stack.Screen name='AddExpense' component={AddExpense}/>
      <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown:false}} />
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})