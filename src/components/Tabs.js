import { useState } from "react";

import styled from "styled-components";
import PropTypes from "prop-types";
import { Text } from "../components/shared/Typography";

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
  margin-bottom: 68px;
`;

const ActiveTab = styled(Tab)`
  border: solid 1px #1797ff;
  color: #1797ff;
`;

function Tabs({ options }) {
  const [isActive, setIsActive] = useState(null);

  return (
    <TabWrapper>
      {options.map((option, index) =>
        index === isActive ? (
          <ActiveTab key={index}>
            <Text
              lineHeight="28px"
              color="#606060"
              fontWeight="500"
              size={16}
              align="center"
            >
              {option}
            </Text>
          </ActiveTab>
        ) : (
          <Tab key={index} onClick={() => setIsActive(index)}>
            <Text
              lineHeight="28px"
              color="#606060"
              fontWeight="500"
              size={16}
              align="center"
            >
              {option}
            </Text>
          </Tab>
        )
      )}
    </TabWrapper>
  );
}

Tabs.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
};

export default Tabs;

<Tab key={index}>
  <Text
    lineHeight="28px"
    color="#606060"
    fontWeight="500"
    size={16}
    align="center"
  >
    {option}
  </Text>
</Tab>;
