import styled from "styled-components";
import PropTypes from "prop-types";

const Container =  styled.div`
    background-color: #fcfcfc;
    height: 100vh;
    margin: 0 auto;
    padding: 0 0 98px;
    width: 100vw;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 1440px;
` 

export function ContainerComponent({ children}){
    return(
        <Container>
           {children}
        </Container>
    )
}

export function MainComponent({children}){
    return(
        <Main>
          {children}
        </Main>
    )
}

ContainerComponent.propTypes = {
    Children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

MainComponent.propTypes = {
    Children:PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
