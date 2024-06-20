import React from 'react';
import * as C from "./styles";

const Select = ({ id, value, onChange, children }) => {
  return (
    <C.Select id={id} value={value} onChange={onChange}>
      {children}
    </C.Select>
  );
};

export default Select;
