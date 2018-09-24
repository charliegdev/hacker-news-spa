import { connect } from "react-redux";
// import { actionCreators } from "../states/actions";
import ListDrawer from "../components/ListDrawer";

const mapStatesToProps = state => ({
  isFetching: true
});

export default connect(mapStatesToProps)(ListDrawer);