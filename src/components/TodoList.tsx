import * as React from 'react';
import { TodoState } from '../states';
import Todo from './Todo';

interface OwnProps {
  todos: TodoState[];
  toggleTodo: (id: number) => any;
}

const TodoList: React.SFC<OwnProps> = (props) => {
  const { todos, toggleTodo } = props;

  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
        />
      )}
    </ul>
  );
};


export default TodoList;
