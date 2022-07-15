import styled from "styled-components";
import PropTypes from "prop-types";

const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const Tab = styled.span`
  width: 98px;
  height: 31px;
  padding: 3px 39px 0 40px;
  border-radius: 2px;
  border: solid 1px #d6d6d6;
  vertical-align: middle;
  line-height: 1.75;
  margin-bottom: 68px;

  font-size: 16px;
  font-weight: 500;
  color: #6b6b6b;
`;

function Tabs({ options }) {
  return (
    <TabWrapper>
      {options.map((option, index) => (
        <Tab key={index}>{option}</Tab>
      ))}
    </TabWrapper>
  );
}

Tabs.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Tabs;
