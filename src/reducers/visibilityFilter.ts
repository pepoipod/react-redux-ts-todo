import { ActionTypes, TodoActions, VisibilityFilters } from '../actions';

const visibilityFilter = (state: VisibilityFilters = VisibilityFilters.SHOW_ALL, action: TodoActions): VisibilityFilters => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
