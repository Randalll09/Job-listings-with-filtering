import React, { useState } from 'react';
import styled from 'styled-components';
import data from './data/data.json';
import CompanyEl from './comp/CompanyEl';
import Filter from './comp/Filter';

const Bg = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.bgColor};
  > header {
    background-image: url('/assets/bg-header-desktop.svg');
    background-color: ${(props) => props.theme.darkGreen};
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 180px;
  }
  > ul {
    margin-top: 82px;
  }
`;

const BackGround = () => {
  const [active, setActive] = useState([]);
  const compData = data;

  compData.map(
    (value) =>
      (value.attribute = [
        value.role,
        value.level,
        ...value.languages,
        ...value.tools,
      ])
  );
  return (
    <Bg>
      <header></header>
      {active.length > 0 ? <Filter active={active} /> : null}
      <ul>
        {compData.map((value) => (
          <CompanyEl setActive={setActive} {...value} key={value.id} />
        ))}
      </ul>
    </Bg>
  );
};

export default BackGround;
