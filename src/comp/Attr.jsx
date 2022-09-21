import React from 'react';
import styled from 'styled-components';

const AttrBox = styled.li`
  display: block;
  margin-left: 6px;
  font-size: 16px;
  line-height: 24px;
  height: 24px;
  padding: 0 6px;
  color: ${(props) => props.theme.mainGreen};
  background-color: ${(props) => props.theme.lightGreen};
  cursor: pointer;
  border-radius: 4px;
`;

const Attr = ({ onClick, value }) => {
  return <AttrBox onClick={onClick}>{value}</AttrBox>;
};

export default Attr;
