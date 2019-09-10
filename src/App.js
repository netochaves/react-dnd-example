import React, { Component } from 'react'
import Board from './components/board'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import boardReducer from './components/reducer'

const store = createStore(boardReducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    )
  }
}

export default App
