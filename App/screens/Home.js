import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  ImageBackground,
  Image
} from 'react-native';

import colors from '../constants/colors';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({  
  container: {
    flex: 1,    
    height: screen.height * 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: screen.height * 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  logo: {
    width: screen.width * 0.90,
    height: screen.height * 0.30,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <ImageBackground source={require('../assets/images/background.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/images/logo5.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </View>
  );
};


export default Home;