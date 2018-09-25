import axios from "axios";
const CHANGE_INPUT = "CHANGE_INPUT";
const SELECT_TOPIC = "SELECT_TOPIC";
const RECEIVED_RESULTS = "RECEIVE_RESULTS";
const SHOW_CONTENT = "SHOW_CONTENT";

const actions = { CHANGE_INPUT, SELECT_TOPIC, RECEIVED_RESULTS, SHOW_CONTENT };
const doReceivedResults = (topic, data) => ({ type: RECEIVED_RESULTS, topic, data });
const doSelectTopic = currentInput => ({ type: SELECT_TOPIC, currentInput });

const fetchTopic = topic => dispatch => {
  dispatch(doSelectTopic(topic));
  return axios.get(`https://hn.algolia.com/api/v1/search?query=${topic}`)
    .then(response => {
      dispatch(doReceivedResults(topic, response.data.hits))
    }, error => console.error(error));
}

const shouldFetchTopic = (state, topic) => !state.results[topic];

const fetchTopicIfNeeded = topic => (dispatch, getState) => {
  if (shouldFetchTopic(getState(), topic)) {
    return dispatch(fetchTopic(topic));
  } else {
    return Promise.resolve();
  }
}

const actionCreators = {
  doChangeInput: currentInput => ({ type: CHANGE_INPUT, currentInput }),
  doShowContent: id => ({ type: SHOW_CONTENT, id }),
  fetchTopicIfNeeded
};

export { actions, actionCreators };