// Example of what an application state would look like. Not actually used.
const states = {
  input: {
    currentInput: "",
    topic: "react"
  },
  isFetching: false,
  results: {
    react: [],
    redux: [],
    tesla: []
  }
};

// Export it simply to remove ESLint error.
export default states;