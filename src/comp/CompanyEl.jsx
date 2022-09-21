import React from 'react';
import styled from 'styled-components';

const Comp = styled.div`
  width: 1114px;
  height: 154px;
`;
const RoundTxt = `
  
`;

const CompanyEl = ({
  logo,
  company,
  isFeatured = false,
  isNew = false,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  lang = [],
  tools = [],
}) => {
  return (
    <Comp>
      <img src={logo} /> <div></div>
    </Comp>
  );
};

export default CompanyEl;
