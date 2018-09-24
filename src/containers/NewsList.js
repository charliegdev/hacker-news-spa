import { connect } from "react-redux";
import ListDrawer from "../components/ListDrawer";

const mapStatesToProps = state => ({
  isFetching: state.isFetching
});

export default connect(mapStatesToProps)(ListDrawer);