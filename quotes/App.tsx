import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { useState } from 'react';

const fonts = () => Font.loadAsync({
  'font': require('./assets/fonts/ShantellSans-Regular.ttf')
})

const App = () => {
  const [isReady, setIsReady] = useState(false);

  if (isReady) {
    return (
      <SafeAreaView>
        <ImageBackground source={require('./assets/img/bg.jpg')}
          resizeMode="cover"
          style={styles.image}
        >
          <Header />
          <Main />
          <Footer />
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    );
  } else {
    return <AppLoading startAsync={fonts} onFinish={() => setIsReady(true)}  onError={console.warn}/>
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export const gStyles = StyleSheet.create({
  text: {
    fontFamily: 'font'
  }
});

export default App;