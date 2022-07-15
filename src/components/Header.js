import styled from "styled-components";
import PropTypes from "prop-types";
import { upperCase } from "lodash";

const HeaderWrapper = styled.header`
  width: 1440px;
  height: 114px;
  margin: 0 0 70px;
  padding: 44px 1082px 42px 150px;
  box-shadow: 0 1px 4px 0 rgba(0, 21, 41, 0.12);
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
`;

const Title = styled.h1`
  width: 208px;
  height: 28px;
  object-fit: contain;
  font-family: Baskerville;
  font-size: 28px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #3b3b3b;
`;

function Header({ title }) {
  return (
    <HeaderWrapper>
      <Title>{upperCase(title)}</Title>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
