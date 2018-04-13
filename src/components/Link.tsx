import * as React from 'react';

export interface OwnProps {
  active: boolean;
  onClick: () => any;
}

const Link: React.SFC<OwnProps> = (props) => {
  const { children, active, onClick } = props;

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px',
      }}
    >
      {children}
    </button>
  );
};

export default Link;
