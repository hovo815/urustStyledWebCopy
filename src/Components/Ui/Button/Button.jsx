import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${({padding}) => padding || "0"};
  width: ${({width}) => width || "150px"};
  max-width: ${({maxWidth}) => maxWidth || "auto"};
  min-width: ${({minWidth}) => minWidth || "auto"};
  display: flex;
  align-items: ${({align}) => align || 'center'};
  justify-content: ${({justify}) => justify || 'center'};
  height: ${({height}) => height || "50px"};
  margin: ${({margin}) => margin || "0"};
  border: ${({border, disabled}) => disabled ? "none" : border ? border : "none"};
  font-family: ${({fontFamily}) => fontFamily || "Gill Sans Regular"}, sans-serif;
  font-size: ${({size}) => size || "18px"};
  line-height: ${({lineHeight}) => lineHeight || "22px"};
  border-radius: ${({borderRadius}) => borderRadius || "6px"};
  background: ${({backgroundProp}) => backgroundProp || "linear-gradient(90.6deg, #F548A0, #f5597d)"};
  color: ${({color, disabled}) => disabled ? "gray" : color ? color : "white"};
  outline: ${({outline}) => outline || "none"};
  cursor: ${({cursor, disabled}) => disabled ? "default" : cursor ? cursor : "pointer"};
  position: ${({position}) => position || "static "};
  top: ${({top}) => top || "auto"};
  right: ${({right}) => right || "auto"};
  z-index: ${({zIndex}) => zIndex || "auto"};

  &:hover {
    color: ${({hoverColor}) => hoverColor || "white"};
`

const Button = (props) => {
    return <StyledButton {...props} />
};


export default Button;