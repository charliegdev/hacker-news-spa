const CHANGE_INPUT = "CHANGE_INPUT";
const SELECT_TOPIC = "SELECT_TOPIC";
const CALL_API = "CALL_API";
const SHOW_CONTENT = "SHOW_CONTENT";

const actions = { CHANGE_INPUT, SELECT_TOPIC, CALL_API, SHOW_CONTENT };

const actionCreators = {
  doChangeInput: currentInput => ({ type: CHANGE_INPUT, currentInput }),
  doSelectTopic: currentInput => ({ type: SELECT_TOPIC, currentInput }),
  doCallApi: topic => ({ type: CALL_API, topic }),
  doShowContent: id => ({ type: SHOW_CONTENT, id })
};

export { actions, actionCreators };