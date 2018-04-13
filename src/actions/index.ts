import { Action } from 'redux';


/************************************************************************************************************************************************
 * Action types.
 ************************************************************************************************************************************************/

export enum ActionTypes {
  ADD_TODO = 'ADD_TODO',
  SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER',
  TOGGLE_TODO = 'TOGGLE_TODO',
}


/************************************************************************************************************************************************
 * Other constants.
 ************************************************************************************************************************************************/

export enum VisibilityFilters {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}


/************************************************************************************************************************************************
 * Action creators.
 ************************************************************************************************************************************************/

let nextTodoId: number = 0;

interface AddTodoAction extends Action {
  type: ActionTypes.ADD_TODO;
  payload: {
    id: number;
    text: string;
  };
}

export const addTodo = (text: string): AddTodoAction => ({
  type: ActionTypes.ADD_TODO,
  payload: {
    id: nextTodoId += 1,
    text,
  }
});


interface SetVisibilityFilterAction extends Action {
  type: ActionTypes.SET_VISIBILITY_FILTER;
  payload: {
    filter: VisibilityFilters;
  };
}

export const setVisibilityFilter = (filter: VisibilityFilters): SetVisibilityFilterAction => ({
  type: ActionTypes.SET_VISIBILITY_FILTER,
  payload: { filter },
});


interface ToggleTodoAction extends Action {
  type: ActionTypes.TOGGLE_TODO;
  payload: {
    id: number;
  };
}

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: ActionTypes.TOGGLE_TODO,
  payload: { id }
});


export type TodoActions = AddTodoAction | SetVisibilityFilterAction | ToggleTodoAction;
