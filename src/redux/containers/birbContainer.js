import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Henlo                  from '../../components/Henlo';
import * as actions           from '../actions/birbActions';


export const mapStateToProps = state => ({
  displayBirbs : state
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Henlo);
