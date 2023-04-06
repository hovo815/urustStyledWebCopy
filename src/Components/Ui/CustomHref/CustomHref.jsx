import React from 'react';
import styled from "styled-components";

const StyledHref = styled.a`
  text-decoration: none;
  display: inline-flex;
  flex-direction: ${({direction}) => direction || "row"};
  align-items: center;
  justify-content: center;
  border: ${({border})=> border || "0"};
  border-bottom: ${({borderBottom}) => borderBottom || "none"};
  line-height: 1.5;
  border-radius: ${({borderRadius}) => borderRadius || "0"};
  background: ${({backgroundProp}) => backgroundProp || "none"};
  width: ${({width}) => width || "auto"};
  height: ${({height}) => height || "auto"};
  margin: ${({margin}) => margin || "0"};
  font-size: ${({size}) => size || "16px"};
  color: ${({color}) => color || "white"};
  font-family: "Monsterat", sans-serif;
  position:${({position})=>position || "static"};
  z-index: ${({zIndex})=> zIndex || "auto"};
  transition: all 0.5s;
  
  svg {
    font-size: ${({size}) => size || "16px"};
    color: ${({color}) => color || "white"};
  }

  &:hover {
      color: ${({hoverColor}) => hoverColor || "#F548A0"};
      background: ${({hoverBgColor}) => hoverBgColor || "none"};
      border-color: ${({hoverBgColor}) => hoverBgColor || "none"};
  }
  & p{
    border-bottom: 2px solid transparent;
  }
  &:hover p{
    border-bottom: 2px solid white;
  }
`

const CustomHref = (props) => {
    return <StyledHref{...props}/>
};


export default CustomHref;