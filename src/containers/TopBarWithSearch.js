import { connect } from "react-redux";
import { actionCreators } from "../states/actions";
import SearchAppBar from "../components/SearchAppBar";

const { doChangeInput, doSelectTopic } = actionCreators;

const mapStateToProps = state => ({
  currentInput: state.input.currentInput
});

const mapDispatchToProps = dispatch => ({ 
  onInputChange: e => {
    dispatch(doChangeInput(e.target.value))
  },
  onTopicSet: e => {
    e.preventDefault();
    // Sort of a hack. Shouldn't have to reach this deep; might be because of Material-UI's <Input />.
    // Having trouble retrieving values in <Input /> from the wrapping <form></form>.
    dispatch(doSelectTopic(e.target[0].defaultValue));
  }
});

const TopBarWithSearch = connect(mapStateToProps, mapDispatchToProps)(SearchAppBar);

export default TopBarWithSearch;