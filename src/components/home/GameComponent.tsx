import {View, Text, StyleSheet, ScrollView, Platform} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createMaterialTopTabNavigator();

const GameComponent = () => {
  return (
    <SafeAreaView style={{
      height: '100%',
      marginTop: Platform.OS == 'ios'?-50: 0,
    }}>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}
      swipeEnabled={false}
      >
        <Tab.Screen name="Cricket" component={FootballComponent} options={{ tabBarLabel: 'Cricket' }} />
        <Tab.Screen name="Football" component={FootballComponent} options={{ tabBarLabel: 'Football' }} />
        <Tab.Screen name="BasketBall" component={FootballComponent} options={{ tabBarLabel: 'Basketball' }} />
        <Tab.Screen name="Tennis" component={FootballComponent} options={{ tabBarLabel: 'Tennis' }} />
    </Tab.Navigator>
    </SafeAreaView>
  );
};

export default GameComponent;

const styles = StyleSheet.create({
  topbarContainer: {
    flexDirection: 'row', // Arrange elements horizontally
    justifyContent: 'space-between', // Distribute content evenly with space in between
    alignItems: 'center', // Align elements vertically in center
    paddingHorizontal: 10, // Add horizontal padding
    backgroundColor: '#333', // Set background color (dark gray)
  },
});

import {Animated, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Tournaments from './Cards/Tournaments';

function MyTabBar({state, descriptors, navigation, position}) {
  return (
   <View style={{
    marginBottom: 10,
   }}>
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      >
    {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        let labelIcon = 'football-outline';
        if (route.name === 'BasketBall') {
          labelIcon = 'basketball-outline';
        }

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              borderRadius: 25,
              backgroundColor: isFocused ? '#E06D44' : '#E4E8EE', // Change color to orange when tab is focused
              height: 110,
              width: 110,
              marginHorizontal: 5,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 15,
            }}>
            <Icon name={labelIcon} size={40} color={isFocused?"white": "#6A6B7C"} />
            <Animated.Text style={{fontSize: 10, fontWeight:"bold", color:isFocused?"white": "#6A6B7C"}}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
      </ScrollView>
  </View>
  );
}


const FootballComponent = () => (
  <View style={{flex: 1}}>
    <Tournaments/>
  </View>
);
