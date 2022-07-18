import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background-color: #fcfcfc;
  height: 100vh;
  margin: 0 auto;
  padding: 0 0 98px;
  width: 100vw;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 70rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-gap: 0 2.25em;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

const GridElement = styled.div`
  grid-column: 6 span;
  padding: 0;

  @media (min-width: 576px) {
    padding: 0.5rem 0;
  }
`;

export function ContainerComponent({ children }) {
  return <Container>{children}</Container>;
}

export function MainComponent({ children }) {
  return <Main>{children}</Main>;
}

export function GridContainer({ children }) {
  return <Grid>{children}</Grid>;
}

export function GridElementContainer({ children }) {
  return <GridElement>{children}</GridElement>;
}

ContainerComponent.propTypes = {
  Children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MainComponent.propTypes = {
  Children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

GridContainer.propTypes = {
  Children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

GridElementContainer.propTypes = {
  Children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
