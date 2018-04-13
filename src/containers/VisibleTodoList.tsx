import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoList from '../components/TodoList';
import { TodoActions, toggleTodo, VisibilityFilters } from '../actions';
import { State, TodoState } from '../states';

interface StateToProps {
  todos: TodoState[];
}

interface DispatchToProps {
  toggleTodo: (id: number) => any;
}

const getVisibleTodo = (todos: TodoState[], filter: VisibilityFilters): TodoState[] => {
  switch (filter)  {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateToProps = (state: State): StateToProps => ({
  todos: getVisibleTodo(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch: Dispatch<TodoActions>): DispatchToProps => ({
  toggleTodo: (id: number) => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
