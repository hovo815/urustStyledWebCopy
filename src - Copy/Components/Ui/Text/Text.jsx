import React from 'react';
import styled, {css} from "styled-components";

const StyledText = styled.p`
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  max-width: ${({maxWidth}) => maxWidth || "auto"};
  color: ${({color}) => color || "white"};
  font-family: Lato,Helvetica,sans-serif,Arial, sans-serif;
  font-size: ${({size}) => size || "18px"};
  line-height: ${({lineHeight}) => lineHeight || "1.7em"};
  letter-spacing: ${({letterSpacing}) => letterSpacing || "0.03em"};
  border-bottom: ${({borderBottom})=>borderBottom || "none"};
  border-top: ${({borderTop})=>borderTop || "none"};
  text-align: ${({textAlign}) => textAlign || "start"};
  margin: ${({margin}) => margin || "0"};
  padding: ${({padding}) => padding || "0"};
  filter: ${({blur})=>blur || "none"};
  ${({hover})=> hover && css`
    &:hover{
      color:${({hoverColor})=> hoverColor || "white"}
    }
    
  `}
`

const Text = (props) => {
    return <StyledText {...props}/>
};


export default Text;