import React from 'react';
import styled from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const StyledWrapper = styled.div`

`

const Wrapper = ({children}) => {
    return (
        <StyledWrapper>
            <Header/>
            {children}
            <Footer/>
        </StyledWrapper>
    );
};


export default Wrapper;