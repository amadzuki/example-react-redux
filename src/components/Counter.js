import React from "react"
import { connect } from "react-redux"

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p>Clicked {counter} times</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
