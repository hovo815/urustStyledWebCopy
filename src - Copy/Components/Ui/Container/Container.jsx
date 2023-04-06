import React from 'react';
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`

const Container = (props) => {
    return <StyledContainer {...props} />
};


export default Container;