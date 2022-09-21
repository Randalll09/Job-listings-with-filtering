import React, { useState } from 'react';
import styled from 'styled-components';
import Attr from './Attr';

const Comp = styled.div`
  margin: 0 auto;
  width: 1114px;
  height: 154px;
  padding: 24px 32px;
  display: flex;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
  box-shadow: 0px 10px 30px 0px #5da1a26b;
  margin-bottom: 32px;
  ${(props) =>
    props.isFeatured
      ? `&::after {
    display:block;
    content:'';
    position:absolute;
    z-index:10;
    top:0;
    left:0;
    width:8px;
    height:100%;
    background-color:${props.theme.mainGreen};
    border-radius:10px 0 0 10px;
  }`
      : null}
  > img {
    display: block;
    object-fit: cover;
    width: 98px;
    height: 98px;
    border-radius: 50%;
  }
  > ul {
    display: flex;
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const CompanyDescription = styled.div`
  margin-left: 24px;
  > div {
    display: flex;
    &:nth-of-type(1) {
      margin-bottom: 8px;
      > p {
        &:nth-of-type(1) {
          color: ${(props) => props.theme.mainGreen};
          line-height: 24px;
          margin-right: 24px;
          font-size: 18px;
        }
      }
    }
    &:nth-of-type(2) {
      > p {
        color: ${(props) => props.theme.gray};
      }
    }
  }
  > p {
    color: ${(props) => props.theme.black};
    margin-bottom: 8px;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;

const RoundTxt = styled.span`
  border-radius: 12px;
  padding: 0 8px;
  height: 24px;
  font-size: 16px;
  color: #fff;
  background-color: ${(props) =>
    props.isNew ? props.theme.mainGreen : props.theme.black};
  margin-right: 8px;
`;

const CompanyEl = ({
  logo,
  company,
  isFeatured = false,
  isNew = false,
  position,
  postedAt,
  contract,
  location,
  attribute,
  setActive,
}) => {
  return (
    <Comp isNew={isNew} isFeatured={isFeatured}>
      <img src={logo} />{' '}
      <CompanyDescription>
        <div>
          <p>{company}</p>
          {isNew ? <RoundTxt isNew={true}>NEW!</RoundTxt> : null}
          {isFeatured ? <RoundTxt>Featured</RoundTxt> : null}
        </div>
        <p>{position}</p>
        <div>
          <p>
            {postedAt} - {contract} - {location}
          </p>
        </div>
      </CompanyDescription>
      <ul>
        {attribute.length > 0
          ? attribute.map((value, idx) => (
              <Attr
                key={idx}
                onClick={() =>
                  setActive((prev) =>
                    prev.indexOf(value) < 0 ? [...prev, value] : [...prev]
                  )
                }
                value={value}
              />
            ))
          : null}
        {}
      </ul>
    </Comp>
  );
};

export default CompanyEl;
