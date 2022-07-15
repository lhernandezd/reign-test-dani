import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { capitalize } from "lodash";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Button = styled.button`
  width: 240px;
  height: 32px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;

  margin: 0 19px 0 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
  text-align: left;
`;

const DropList = styled.ul`
  list-style: none;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropItem = styled.li`
  width: 240px;
  height: 46px;
  margin: 45px 1px 48px 0;
  padding: 6px 89px 10px 11px;
  opacity: 0.2;
  background-color: #eaeaea;
`;

function Dropdown({ options, buttonTitle }) {
  const [visible, setVisible] = useState(false);

  return (
    <DropdownWrapper>
      <Button onClick={() => setVisible(!visible)}>{buttonTitle}</Button>
      <DropList visible={visible}>
        {options.map((option, index) => (
          <DropItem key={index} onClick={() => setVisible(false)}>
            {capitalize(option)}
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
