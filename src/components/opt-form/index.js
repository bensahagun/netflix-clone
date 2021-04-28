import React from 'react';
import { Container, Input, Button, Break, Text } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function ({ ...restProps }) {
  return <Input {...restProps}></Input>;
};

OptForm.Button = function ({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src='/images/icons/chevron-right.png' alt='Try now' />
    </Button>
  );
};

OptForm.Text = function ({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function ({ ...restProps }) {
  return <Break {...restProps} />;
};
