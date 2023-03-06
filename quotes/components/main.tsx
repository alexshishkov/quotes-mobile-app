import { SafeAreaView, StyleSheet, Text, Pressable, StatusBar, View } from 'react-native';
import { gStyles } from '../App';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[gStyles.text, styles.quotes, styles.textColor]}>"Ты можешь сказать, что у тебя плохая генетика, плохой обмен веществ, а можешь просто поднять свою задницу с дивана и начать работать над собой, задаться целью и верить в себя",</Text>
      <View style={styles.wrap}>
        <Text style={[gStyles.text, styles.autor, styles.textColor]}>Конфуций</Text>
        <Pressable style={styles.newQuotes}>
          <Text style={[gStyles.text, styles.button, styles.textColor]}>Новая цитата</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
  quotes: {
    flex: 1,
    width: '90%',
    height: '100%',
    fontSize: 27,
    marginTop: 20,
    backgroundColor: 'black',
  },
  wrap: {
    width: '90%',
  },
  autor: {
    textAlign: 'right',
    fontSize: 20,
  },
  newQuotes: {
    width: '50%',
    borderWidth: 3,
    borderRadius: 5,
    borderColor: 'white',
    padding: 10,
    marginTop: 30,
    marginLeft: '25%',
    marginRight: '25%',
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Main;