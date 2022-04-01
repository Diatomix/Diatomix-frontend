import React from 'react';

class ThemedButton extends React.Component {
  setTheme() {
    const allowed = ['mdc-dark-indigo', 'mdc-light-indigo', 'lara-light-indigo', 'rhea'];
    var item = allowed[Math.floor(Math.random() * allowed.length)];
    localStorage.setItem('CHOSEN_THEME', item);
    console.log('localStorage', localStorage);
    window.location.reload(false);
  }
  render() {
    let props = this.props;
    let theme = this.context;
    console.log('theme context', theme);
    return <button {...props} onClick={this.setTheme} />;
  }
}

export default ThemedButton;
