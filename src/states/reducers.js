import { combineReducers } from "redux";
import { actions } from "./actions";

const { NEW_INPUT } = actions;

const input = (state = "tesla", action) => {
  switch (action.type) {
  case NEW_INPUT:
    return action.input;
  default:
    return state;
  }
};

const mockCallApi = topic => console.log("Pretending I'm calling Hacker News API: " + topic);

const results = (state = {}, action) => {
  const { type, input } = action;
  switch (type) {
  case NEW_INPUT:
    if (state[input]) return;
    mockCallApi(input);
    break;
  default:
    return state;
  }
};

export default combineReducers({ input, results });