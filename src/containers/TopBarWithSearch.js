import { connect } from "react-redux";
import { actionCreators } from "../states/actions";
import SearchAppBar from "../components/SearchAppBar";

const { doChangeInput, fetchTopic } = actionCreators;

const mapStateToProps = state => ({
  currentInput: state.input.currentInput
});

const mapDispatchToProps = dispatch => ({ 
  onInputChange: e => {
    dispatch(doChangeInput(e.target.value))
  },
  onTopicSet: e => {
    e.preventDefault();
    // Having trouble retrieving values in <Input /> from the wrapping <form></form>.
    // Sort of a hack. Shouldn't have to reach this deep; might be because of Material-UI's <Input />.
    dispatch(fetchTopic(e.target[0].defaultValue));
  }
});

const TopBarWithSearch = connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);

export default TopBarWithSearch;