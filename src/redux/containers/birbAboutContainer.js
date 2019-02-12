import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import About                  from '../../components/About';
import * as actions           from '../actions/birbActions';

export const mapStateToProps = state => ({
  birbList             : state.birbs.birbList || [],
  birbsLoadingStatus: state.birbs.birbsLoadingStatus || ''
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
