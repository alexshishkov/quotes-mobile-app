import React from 'react';
import { useTranslation } from 'react-i18next';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { gStyles } from '../globalStyle';
import quotes from '../store/quotes';

interface IProps {
  getQuotes: () => Promise<void>
}

const Main = (props: IProps) => {
  const { t } = useTranslation();
  const { getQuotes } = props;
  const { quoteText, quoteAuthor } = quotes.quotes;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.quotesWrapper}><Text style={[gStyles.text, styles.quotes, styles.textColor]}>{quoteText}</Text></View>
      <View style={styles.wrap}>
        <Text style={[gStyles.text, styles.autor, styles.textColor]}>{quoteAuthor}</Text>
        <TouchableOpacity style={styles.newQuotes} onPress={getQuotes} >
          <Text style={[gStyles.text, styles.button, styles.textColor]}>{t(`new-quote`)}</Text>
        </TouchableOpacity>
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
  quotesWrapper: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quotes: {
    fontSize: 22,
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
    padding: 5,
    marginTop: 30,
    marginLeft: '25%',
    marginRight: '25%',
    marginBottom: 10,
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Main;