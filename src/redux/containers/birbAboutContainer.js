import { bindActionCreators } from "redux";
import { connect }            from "react-redux";
import About                  from "../../components/about";
import * as actions           from "../actions/birbActions";

export const mapStateToProps = ({ about }) => ({
  birbList          : about.birbList || [],
  birbsLoadingStatus: about.birbsLoadingStatus || "",
  activeFilter      : about.filter || "",
  filteredBirbList   : about.filteredBirbList || [],
  showAddBirb       : about.showAddBirb,
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
