import { observer } from 'mobx-react-lite';
import React from 'react';
import { SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import language from '../store/launguage'
interface IProps {
  getQuotes: () => void
}

const Header = observer((props: IProps) => {
  const { getQuotes } = props;
  const click = () => {
    language.setLanguage()
    getQuotes()
  }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={click}>
        <Image
          style={styles.img}
          source={require('../assets/img/language.png')}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
})

const styles = StyleSheet.create({
  img: {
    top: 25,
    left: '70%',
  },
});

export default Header;