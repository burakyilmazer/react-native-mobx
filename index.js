/**
 * @format
 */
import React, {Component} from "react";
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'mobx-react';
import MainStore from './store';

class Mobx extends Component {
  render() {
    return (
      <Provider MainStore={MainStore}>
        <App/>
      </Provider>
    )
  }
}

AppRegistry.registerComponent(appName, () =>
  Mobx
);
