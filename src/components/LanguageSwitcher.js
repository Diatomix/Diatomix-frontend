import React from 'react';
import { LanguageContext } from '../contexts/language-context';

export class LanguageSwitcher extends React.Component {
  render() {
    return <LanguageContext.Consumer>{({ language, setLanguage }) => <button onClick={() => setLanguage('jp')}>Switch Language (Current: {language})</button>}</LanguageContext.Consumer>;
  }
}
