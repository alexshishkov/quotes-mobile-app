import { StyleSheet, SafeAreaView, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { gStyles } from '../globalStyle';
import React from 'react';

const ServerErrors = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={[styles.error, gStyles.text]}>{t(`server-error`)}</Text>
      <Image source={require('../assets/img/error.png')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
});

export default ServerErrors;