import { SafeAreaView, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { gStyles } from '../globalStyle';
import React from 'react';

const linkGithub = 'https://github.com/alexshishkov';
const linkTelegram = 'https://t.me/alex_shishkov1';

const openLink = (link: string) => Linking.openURL(link);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[gStyles.text, styles.creation]}>{t(`creation-date`)}</Text>
      <TouchableOpacity onPress={() => openLink(linkTelegram)}>
        <Image
          style={styles.contact}
          source={require('../assets/img/telegram.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  creation: {
    fontSize: 18,
    color: 'white',
  },
  contact: {
    width: 100,
    height: 100,
  },
});

export default Footer;