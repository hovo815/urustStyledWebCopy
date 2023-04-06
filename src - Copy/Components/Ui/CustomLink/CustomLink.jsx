import React from 'react';
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const StyledLink = styled.div`
  width: ${({width})=> width || "auto"};
  a{
    display: flex;
    align-items: center;
    font-family: "Monsterat", sans-serif;
    width: ${({width})=> width || "auto"};
    text-decoration: none;
    font-size: ${({size})=> size || "18px"};
    color: ${({color})=> color || 'white'};
    line-height: 1.7;
    margin: ${({margin})=> margin || "0"};
    padding: ${({padding})=> padding || "0"};
    transition: all 0.5s;
  }
  a:hover {
      color: ${({hoverColor}) => hoverColor || "#F548A0"};
    background:${({backgroundHover})=> backgroundHover || "none"};
`


const CustomLink = (props) => {
    let activeStyle = {
        color:props.hoverColor
    }
    return (
        <StyledLink {...props}>
            <NavLink style={({ isActive }) =>
                isActive ? activeStyle : undefined}  to={props.to}>{props.children}</NavLink>
        </StyledLink>
    );
};


export default CustomLink;