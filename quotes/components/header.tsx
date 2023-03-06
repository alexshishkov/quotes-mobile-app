import { SafeAreaView, StyleSheet, Image } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <Image
          style={styles.img}
          source={require('../assets/img/language.png')}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    top: 25,
    left: '70%',
  },
});

export default Header;