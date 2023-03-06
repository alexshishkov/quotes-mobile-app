import { SafeAreaView, Text, StyleSheet, Image, View, Linking, TouchableOpacity } from 'react-native';
import { gStyles } from '../App';

const linkGithub = 'https://github.com/alexshishkov';
const linkTelegram = 'https://t.me/alex_shishkov1';

const openLink = (link: string) => Linking.openURL(link);

const Footer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[gStyles.text, styles.creation]}>Сделано 2023</Text>
      <View style={styles.contacts}>
        <TouchableOpacity onPress={() => openLink(linkGithub)}>
          <Image
            style={styles.contact}
            source={require('../assets/img/github.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => openLink(linkTelegram)}>
          <Image
            style={styles.contact}
            source={require('../assets/img/telegram.png')}
          />
        </TouchableOpacity>
      </View>
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
    fontSize: 20,
    color: 'white',
  },
  contacts: {
    width: 180,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  contact: {
    width: 100,
    height: 100,
  },
});

export default Footer;