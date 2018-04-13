import { connect } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter, TodoActions, VisibilityFilters } from '../actions';
import { State } from '../states';
import { Dispatch } from 'redux';


interface OwnProps {
  filter: VisibilityFilters;
}

interface StateToProps {
  active: boolean;
}

interface DispatchToProps {
  onClick: () => any;
}

const mapStateToProps = (state: State, ownProps: OwnProps): StateToProps => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>, ownProps: OwnProps): DispatchToProps => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
