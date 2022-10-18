// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import store from '.store';
ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);