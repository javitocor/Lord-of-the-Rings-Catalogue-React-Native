import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {Image} from 'react-native';
import Home from '../screens/Home';
import Books from '../screens/Books';
import BookDetail from '../screens/BookDetail';
import Movies from '../screens/Movies';
import MovieDetail from '../screens/MovieDetail';
import Characters from '../screens/Characters';
import CharacterDetail from '../screens/CharacterDetail';
import HeaderBooks from '../components/HeaderBooks';
import HeaderMovies from '../components/HeaderMovies';
import HeaderCharacters from '../components/HeaderCharacters';

const BookStack = createStackNavigator();

function BookStackScreen() {
  return (
    <BookStack.Navigator>
      <BookStack.Screen name="BooksScreen" component={Books} options={{header: (props) => <HeaderBooks {...props} />}} />
      <BookStack.Screen name="BookDetail" component={BookDetail} options={{header: (props) => <HeaderBooks {...props} />}} />
    </BookStack.Navigator>
  );
}

const MovieStack = createStackNavigator();

function MovieStackScreen() {
  return (
    <MovieStack.Navigator>
      <MovieStack.Screen name="MoviesScreen" component={Movies} options={{header: (props) => <HeaderMovies {...props} />}} />
      <MovieStack.Screen name="MovieDetail" component={MovieDetail} options={{header: (props) => <HeaderMovies {...props} />}} />
    </MovieStack.Navigator>
  );
}

const CharacterStack = createStackNavigator();

function CharacterStackScreen() {
  return (
    <CharacterStack.Navigator>
      <CharacterStack.Screen name="CharactersScreen" component={Characters} options={{header: (props) => <HeaderCharacters {...props} />}} />
      <CharacterStack.Screen name="CharacterDetail" component={CharacterDetail} options={{header: (props) => <HeaderCharacters {...props} />}} />
    </CharacterStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'md-home' : 'md-home-outline';
        } else if (route.name === 'Books') {
          iconName = focused ? 'md-book' : 'md-book-outline';
        } else if (route.name === 'Movies') {
          iconName = focused ? 'md-film' : 'md-film-outline';
        } else if (route.name === 'Characters') {
          iconName = focused ? 'people-circle' : 'people-circle-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'yellow',
      tabBarInactiveTintColor: 'grey',
      tabBarBackground: () => (
        <Image resizeMode="stretch" style={{ width: undefined, height: undefined, flex: 1, alignItems:'center', justifyContent:'center' }} source={require('../assets/images/background.jpg')} />
      ),
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Books" component={BookStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Movies" component={MovieStackScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Characters" component={CharacterStackScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default () => (
  <NavigationContainer>
    <TabNavigation />
  </NavigationContainer>
);