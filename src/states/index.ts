import { VisibilityFilters } from '../actions';

export interface State {
  readonly visibilityFilter: VisibilityFilters;
  readonly todos: TodoState[];
}

export interface TodoState {
  readonly id: number;
  readonly text: string;
  readonly completed: boolean;
}
