import { combineReducers } from "redux";
import { actions } from "./actions";

const { CHANGE_INPUT, SELECT_TOPIC } = actions;

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
    return { ...state, topic: currentInput }
  default:
    return state;
  }
};

const mockCallApi = topic => console.log("Pretending I'm calling Hacker News API: " + topic);

const results = (state = {}, action) => {
  const { type } = action;
  switch (type) {
  case SELECT_TOPIC: {
    const { currentInput } = action;
    if (state[currentInput]) return;
    mockCallApi(currentInput);
    return state;
  }
  default:
    return state;
  }
};

export default combineReducers({ input, results });