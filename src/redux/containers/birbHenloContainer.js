import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import Henlo                  from '../../components/henlo';
import * as actions           from '../actions/birbActions';

export const mapStateToProps = ({henlo}) => ({
  showTheBirbs: henlo.showBirb,
  showCode    : henlo.showCode,
});

export const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Henlo);
