import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import About                  from '../../components/about';
import * as actions           from '../actions/birbActions';

export const mapStateToProps = state => ({
  birbList           : state.about.birbList || [],
  birbsLoadingStatus : state.about.birbsLoadingStatus || '',
  activeFilter       : state.about.filter || '',
  filteredBirbList    : state.about.filteredBirbList || []
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
