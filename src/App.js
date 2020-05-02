import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import Content from "./components/Content"
import Counter from "./components/Counter"

import rootReducer from "./reducers/index"

const reduxStore = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={reduxStore}>
      <div>
        <Counter />
        <Content />
      </div>
    </Provider>
  )
}

export default App
