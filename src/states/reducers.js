// Look at shape.js file to see what a sample state would look like.
import { combineReducers } from "redux";
import { actions } from "./actions";

const { CHANGE_INPUT, SELECT_TOPIC, RECEIVED_RESULTS, RESULT_CACHED } = actions;

const defaultInputState = {
  currentInput: "",
  topic: "Tesla"
};

const input = (state = defaultInputState, action) => {
  const { type, currentInput } = action;
  switch (type) {
  case CHANGE_INPUT:
    return { ...state, currentInput };
  case SELECT_TOPIC:
    return { 
      ...state, 
      topic: currentInput, 
      currentInput: "" 
    }
  case RESULT_CACHED:
    return { ...state, currentInput: "" };
  default:
    return state;
  }
};


const results = (state = {}, action) => {
  const { type } = action;
  switch (type) {
  case RECEIVED_RESULTS: {
    // When the API call has returned results with news
    const { topic, data } = action;
    return { 
      ...state,
      [topic]: data
    }
  }
  default:
    return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
  case SELECT_TOPIC:
    return true;
  case RECEIVED_RESULTS:
    return false;
  default: 
    return state;
  }
};

export default combineReducers({ input, results, isFetching });