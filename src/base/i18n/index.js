import { camelize, getProperty } from '../shared/utils';

let instance;

class I18nStore {
  constructor() {
    if (instance) return instance;

    instance = this;
    this.setLang(sessionStorage.getItem('lang') || navigator.language);
  }

  setLang(lang) {
    sessionStorage.setItem('lang', lang);
    this.lang = camelize(lang);
  }

  saveTranslations(translations) {
    this.translations = translations;
  }

  translate = text => getProperty(this.translations, this.lang, text) || text;
}

export const txt = new I18nStore().translate.bind(instance);
export default new I18nStore();
