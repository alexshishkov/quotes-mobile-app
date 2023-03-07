import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react'
import { StyleSheet, SafeAreaView, ImageBackground, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import * as SplashScreen from 'expo-splash-screen';
import loading from './store/preLoader';
import quotes from './store/quotes';
import ServerErrors from './components/serverError';
import { gStyles } from './globalStyle';

SplashScreen.preventAutoHideAsync();

const App = observer(() => {
  const [isReady, setIsReady] = useState(false);
  const { getQuotes, serverErrors } = quotes;

  useEffect(() => {
    async function prepare() {
      await Font.loadAsync({
        'font': require('./assets/fonts/ShantellSans-Regular.ttf')
      })
      await SplashScreen.preventAutoHideAsync();
      setIsReady(true);
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
      await getQuotes()
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }
    return (
      <SafeAreaView onLayout={onLayoutRootView}>
        <ImageBackground source={require('./assets/img/bg.jpg')}
          resizeMode="cover"
          style={styles.image}
        >
          <Header getQuotes={getQuotes} />
          {serverErrors ? <ServerErrors /> :
            loading.loading
              ?
              <ActivityIndicator style={gStyles.loader} animating={true} size={60} color={'#4f8fd8'} />
              :
              <Main getQuotes={getQuotes} />
          }
          <Footer />
        </ImageBackground>
        <StatusBar style="auto" />
      </SafeAreaView>
    )
})

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default App;
