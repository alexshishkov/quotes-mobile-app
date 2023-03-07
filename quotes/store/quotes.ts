import axios from 'axios'
import { makeAutoObservable } from "mobx"
import loading from './preLoader'
import language from './launguage'

export interface IQuotes {
  quoteText: string
  quoteAuthor: string
  senderName: string
  senderLink: string
  quoteLink: string
}

class Quotes {
  quotes = {
    quoteText: '',
    quoteAuthor: '',
    senderName: '',
    senderLink: '',
    quoteLink: '',
  }
  serverErrors = false
  nameError: unknown
  

  constructor() {
      makeAutoObservable(this)
  }

  getQuotes = async () => {
    try {
      loading.setLoading()
      const key = Math.floor(Math.random() * 1000000)
      const quotes = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=' + key + '&lang=' + language.language + '&format=json&jsonp=?';
      let res = await axios.get(quotes)
      let data = res.data
      if (data.quoteAuthor === undefined) {
        this.getQuotes()
      } else if (data.quoteText === undefined) {
        this.getQuotes()
      } else if (data.quoteAuthor.length === 0) {
        this.getQuotes()
      } else if (data.quoteText.length > 180) {
        this.getQuotes()
      } else {
        this.quotes = data
        loading.loaded()
      }
    } catch (e) {
      this.serverErrors = true
    }
   
  }
}

export default new Quotes();