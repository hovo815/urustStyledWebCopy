import React from 'react';
import styled, {css} from "styled-components";

const StyledCards = styled.div`
  background: ${({backgroundProp}) => backgroundProp || "none"};
  padding:${({padding})=>padding || "20px"};
  min-height: ${({minHeight})=> minHeight || "50px"};
  box-shadow: 0 4px 16px 0 rgba(0,0,0,.05);
  position: ${({position})=>position|| "none"};
  border: ${({border})=> border || "2px solid transparent"} ;
  border-radius: ${({borderRadius})=> borderRadius ||"20px"};
  display: flex;
  flex-direction: column;
  align-items: ${({align})=> align || "stretch"};
  justify-content: stretch;
  width: 100%;
  height: ${({height})=> height || "auto"};
  ${({hover})=> hover && css`
    &:hover{
      border: 2px solid ${({hover})=> hover ||"none"};
    }
  `}
  ${({teamMan}) => teamMan && css`
    @media screen and (max-width: 767px) {
      height: 100% !important;
    }
  `};
`

const Cards = (props) => {
    return <StyledCards {...props}/>
};


export default Cards;