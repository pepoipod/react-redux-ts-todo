import * as React from 'react';
import { connect } from 'react-redux';
import { addTodo, TodoActions } from '../actions';
import { Dispatch } from 'redux';

interface OwnProps {
  dispatch: Dispatch<TodoActions>;
}

const AddTodo: React.SFC<OwnProps> = (props) => {
  const { dispatch } = props;
  let input: HTMLInputElement;

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input
          ref={(node: HTMLInputElement) => {
            input = node;
          }}
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
