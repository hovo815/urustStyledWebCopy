import React from 'react';
import styled, {css} from "styled-components";

const StyledMainTitle = styled.h1`
  font-family: Lato, Helvetica, sans-serif, Arial, sans-serif;;
  max-width: ${({maxWidth}) => maxWidth || "auto"};
  height: ${({height}) => height || "auto"};
  font-weight: 700;
  font-size: ${({size}) => size || "48px"};
  color: ${({color}) => color || "white"};
  margin: ${({margin}) => margin || "0"};
  text-align: ${({textAlign}) => textAlign || "start"};
`

const StyledTitle = styled.h3`
  font-family: Lato,Helvetica,sans-serif,Arial, sans-serif;
  max-width: ${({maxWidth})=>maxWidth||"auto"};
  height: ${({height})=>height||"auto"};
  padding: ${({padding})=>padding||"0"};
  font-weight: ${({weight})=> weight || 700};
  border-left: ${({borderLeft})=> borderLeft || "0"};
  font-size: ${({size})=> size || "58px"};
  color: ${({color})=>color || "white"};
  margin: ${({margin})=> margin || "0"};
  text-align: ${({textAlign})=>textAlign || "start"};

  ${({size})=>size === "54px" && css`
  @media screen and (max-width: 991px){
    font-size:40px
  }
`}
${({size})=>size === "52px" && css`
  @media screen and (max-width: 574px){
    font-size:40px
  }
`}
`

const Title = props => {
    return props.main ? <StyledMainTitle{...props}/> : <StyledTitle{...props}/>
};


export default Title;