import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';
import Movies from '../screens/Movies';
import MovieDetail from '../screens/MovieDetail';
import Characters from '../screens/Characters';
import CharacterDetail from '../screens/CharacterDetail';

const BookStack = createStackNavigator();

function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen name="Books" component={Books} />
      <BookStack.Screen name="BookDetail" component={BookDetail} />
    </BookStack.Navigator>
  );
}

const MovieStack = createStackNavigator();

function MovieStackScreen() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="Movies" component={Movies} />
      <MovieStack.Screen name="MovieDetail" component={MovieDetail} />
    </MovieStack.Navigator>
  );
}

const CharacterStack = createStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen name="Characters" component={Characters} />
      <CharacterStack.Screen name="CharacterDetail" component={CharacterDetail} />
    </CharacterStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Books" component={BookStackScreen} />
      <Tab.Screen name="Movies" component={MovieStackScreen} />
      <Tab.Screen name="Characters" component={CharacterStackScreen} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);