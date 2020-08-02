import React, { useState } from 'react';
import { Button } from 'antd';

export const LoadingButtonComponent = props => {
  const [buttonState, SetButtonState] = useState(false);
  return (
    <Button type="primary" loading={props.state}>
      {props.name}
    </Button>
  );
};
