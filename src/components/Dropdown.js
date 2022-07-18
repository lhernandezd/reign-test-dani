import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { capitalize } from "lodash";
import { Text } from "./shared/Typography";
import Icon from "./shared/Icon";
import AngularIcon from "../assets/angular.png";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 38px;
`;

const Button = styled.button`
  width: 240px;
  height: 32px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
  margin: 0 19px 0 0;

  &:hover {
    cursor: pointer;
  }
`;

const DropList = styled.ul`
  list-style: none;
  width: 240px;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0;
  margin: 0;
  background: white;
`;

const DropItem = styled.li`
  height: 46px;
  padding: 8px 0 8px 10px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
  }
`;

function Dropdown({ options, buttonTitle }) {
  const [visible, setVisible] = useState(false);

  return (
    <DropdownWrapper>
      <Button onClick={() => setVisible(!visible)}>
        <Text>{buttonTitle}</Text>
      </Button>
      <DropList visible={visible}>
        {options.map((option, index) => (
          <DropItem key={index} onClick={() => setVisible(false)}>
            <Icon src={AngularIcon} width={20} height={22} />
            <Text style={{ marginLeft: 13 }}>{capitalize(option)}</Text>
          </DropItem>
        ))}
      </DropList>
    </DropdownWrapper>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  buttonTitle: PropTypes.string,
};

export default Dropdown;
