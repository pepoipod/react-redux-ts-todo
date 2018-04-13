import * as React from 'react';

interface OwnProps {
  onClick: any;
  completed: boolean;
  text: string;
}

const Todo: React.SFC<OwnProps> = (props) => {
  const { onClick, completed, text } = props;

  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
