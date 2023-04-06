import React from 'react';
import styled, {css} from "styled-components";

const StyledImage = styled.img`
  height: ${({height}) => height || 'auto'};
  width: ${({width}) => width || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || 'auto'};
  object-fit: ${({fit})=> fit || "contain"};
  border: ${({border})=>border || '0'};
  border-radius: ${({borderRadiusCustom})=> borderRadiusCustom || "0"};
  transform: ${({rotate})=> rotate || 0};
  margin: ${({margin})=> margin || "0"};
  ${({borderRadius})=> borderRadius && css`
    border-radius: 16px 16px 0 0;
  `}
`

const Images = (props) => {
    return <StyledImage {...props}/>;
};


export default Images;