import React from 'react';
import styled from "styled-components";

const StyledVideo = styled.video`
  width: ${({width})=> width || "100%"};
  height: ${({height})=> height || "100%"};
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

const Video = props => {
    return <StyledVideo autoPlay loop muted playsInline {...props}/>
};


export default Video;