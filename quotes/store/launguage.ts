import { makeAutoObservable } from "mobx"
import i18n from '../localization/i18n';

class Language {
  language = 'en'

  constructor() {
      makeAutoObservable(this)
  }

  setLanguage() {
    this.language === 'en' ? this.language = 'ru' : this.language = 'en'
    i18n.changeLanguage(this.language)
  }
}

export default new Language();