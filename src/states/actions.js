const CHANGE_INPUT = "CHANGE_INPUT";
const SELECT_TOPIC = "SELECT_TOPIC";
const RECEIVED_RESULTS = "RECEIVE_RESULTS";
const SHOW_CONTENT = "SHOW_CONTENT";

const actions = { CHANGE_INPUT, SELECT_TOPIC, RECEIVED_RESULTS, SHOW_CONTENT };

const actionCreators = {
  doChangeInput: currentInput => ({ type: CHANGE_INPUT, currentInput }),
  doSelectTopic: currentInput => ({ type: SELECT_TOPIC, currentInput }),
  doReceivedResults: (topic, data) => ({ type: RECEIVED_RESULTS, topic, data }),
  doShowContent: id => ({ type: SHOW_CONTENT, id })
};

export { actions, actionCreators };