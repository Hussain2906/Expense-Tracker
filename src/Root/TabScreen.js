import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/HomeScreens/HomeScreen';
import ProfileScreen from '../Views/HomeScreens/ProfileScreen';
import Name from '../Views/HomeScreens/Stats';
import images from '../Constants/images';
import Icon, {Icons} from '../Constants/icons';
import AllExpense from '../Views/HomeScreens/AllExpense';
import Stats from '../Views/HomeScreens/Stats';
import AddExpense from '../Views/HomeScreens/AddExpense';
import MenuScreen from '../Views/Screens/MenuScreen';
import {useIsFocused} from '@react-navigation/native';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  // Custom tab bar style

  const customTabBarStyle = {
    style: {},
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold', // Bold labels
    },
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#7B78AA'}}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          keyboardHidesTabBar: true,
          tabBarStyle: {
            height: 80,
            paddingTop: 10,
            backgroundColor: '#19173D',
            borderRadius: 20,
          },
          headerShown: false,
        }}
        tabBarOptions={{
          ...customTabBarStyle,
          keyboardHidesTabBar: true, // Hide tab bar when keyboard is open
        }}>
        <Tab.Screen
          name="HomeScreen"
          options={{
            tabBarIcon: ({color, focused}) => (
              <Icon
                type={Icons.Entypo}
                name={'home'}
                color={focused ? '#AF52DE' : 'white'}
                size={25}
              />
            ),
          }}
          component={HomeScreen}
        />

        <Tab.Screen
          name="AllExpense"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <Icon
                type={Icons.MaterialIcons}
                name={'leaderboard'}
                color={focused ? '#AF52DE' : 'white'}
                size={25}
              />
            ),
          }}
          component={AllExpense}
        />
        <Tab.Screen
          name="AddExpense"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <View style={{height: 50, width: 50, marginBottom: 30}}>
                <Image
                  style={{
                    position: 'relative',
                    bottom: 30,
                    right: 40,
                    width: 130,
                    height: 100,
                  }}
                  source={images.add_pic}
                />
                <Icon
                  style={{position: 'absolute', bottom: 10, left: 14}}
                  type={Icons.FontAwesome5}
                  name={'plus'}
                  color={focused ? '#AF52DE' : 'white'}
                  size={25}
                />
              </View>
            ),
          }}
          component={AddExpense}
        />

        <Tab.Screen
          name="Stats"
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <Icon
                type={Icons.MaterialIcons}
                name={'query-stats'}
                color={focused ? '#AF52DE' : 'white'}
                size={25}
              />
            ),
          }}
          component={Stats}
        />
        <Tab.Screen
          name="profile"
          options={{
            activeTintColor: () => 'red',
            tabBarLabel: '',
            tabBarIcon: ({color, focused}) => (
              <Icon
                type={Icons.Entypo}
                name={'home'}
                color={focused ? '#AF52DE' : 'white'}
                size={25}
              />
            ),
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default TabNavigation;
