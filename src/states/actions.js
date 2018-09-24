const NEW_INPUT = "NEW_INPUT";
const CALL_API = "CALL_API";
const SHOW_CONTENT = "SHOW_CONTENT";

const actions = { NEW_INPUT, CALL_API, SHOW_CONTENT };

const actionCreators = {
  doNewInput: input => ({ type: NEW_INPUT, input: input.toLowerCase() }),
  // doCallApi: topic => ({ type: CALL_API, topic }),
  doShowContent: id => ({ type: SHOW_CONTENT, id })
};

export { actions, actionCreators };