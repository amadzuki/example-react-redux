const initialState = {
  nextId: 1,
  todos: [],
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        nextId: state.nextId + 1,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            text: action.payload.text,
            isCompleted: false,
          },
        ],
      }
    default:
      return state
  }
}

export default todos
