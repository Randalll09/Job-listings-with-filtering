import React from 'react';
import styled from 'styled-components';
import Attr from './Attr';

const FilterBox = styled.div`
  position: absolute;
  top: 148px;
  height: 64px;
  background-color: #fff;
`;

const Filter = ({ active }) => {
  return (
    <FilterBox>
      <ul>
        {active.map((value, idx) => (
          <Attr value={value} key={idx} />
        ))}
      </ul>
    </FilterBox>
  );
};

export default Filter;
