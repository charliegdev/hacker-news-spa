import { connect } from "react-redux";
import ListDrawer from "../components/ListDrawer";

const mapStatesToProps = state => ({
  isFetching: state.isFetching,
  newsItems: state.results[state.input.topic]
});

export default connect(mapStatesToProps)(ListDrawer);