import React from 'react'
import { Greeting } from './Greeting'
import { Provider } from 'react-redux'
import store from '../redux/configurestore'

export const App = () => {
  return (
    <Provider store={store}>
        <Greeting />
    </Provider>
  )
}
