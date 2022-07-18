import { useState } from 'react'

import styled from "styled-components";
import PropTypes from "prop-types";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 68px;
  text-align: center;
`;

const Tab = styled.span`
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px #d6d6d6;
  vertical-align: middle;
  line-height: 1.75;

  font-size: 16px;
  font-weight: 500;
  color: #6b6b6b;
`;

const ActiveTab = styled(Tab)`
  border: solid 1px #1797ff;
  color: #1797ff
` 

function Tabs({ options }) {
  const [ isActive, setIsActive] = useState(null)
  console.log(isActive)

  return (
    <TabWrapper>
      {options.map((option, index) => (
        index === isActive ? 
        <ActiveTab key={index}>{option}</ActiveTab>
        : 
        <Tab key={index} onClick={() =>  setIsActive(index)}>{option}</Tab>
      ))}
    </TabWrapper>
  );
}



Tabs.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Tabs;
