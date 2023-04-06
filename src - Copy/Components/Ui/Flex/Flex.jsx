import React from 'react';
import styled, {css} from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  width: ${({width}) => width || '100%'};
  min-width: ${({minWidth}) => minWidth || 'auto'};
  max-width: ${({maxWidth}) => maxWidth || 'auto'};
  height: ${({height}) => height || '100%'};
  min-height: ${({minHeight}) => minHeight || 'auto'};
  max-height: ${({maxHeight}) => maxHeight || 'auto'};
  flex-direction: ${({direction}) => direction || 'row'};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
  opacity: ${({opacity}) => opacity || 1};
  row-gap: ${({rowGap}) => rowGap || 0};
  align-items: ${({align}) => align || 'stretch'};
  align-self: ${({alignSelf}) => alignSelf || 'auto'};
  grid-column-gap: ${({columnGap}) => columnGap || "0"};
  justify-content: ${({justify}) => justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  border: ${({border}) => border || 'none'};
  border-bottom: ${({borderBottom}) => borderBottom || 'none'};
  border-top: ${({borderTop}) => borderTop || 'none'};
  border-radius: ${({borderRadius}) => borderRadius || '0'};
  background: ${({backgroundProp}) => backgroundProp || 'none'};
  background-size: ${({backgroundSize}) => backgroundSize || 'initial'};
  position: ${({position}) => position || 'static'};
  z-index: ${({zIndex}) => zIndex || "auto"};
  overflow-x: ${({overflowX}) => overflowX || "visible"};
  overflow-y: ${({overflowY}) => overflowY || "visible"};
  position: ${({position}) => position || "static "};
  left: ${({left}) => left || "auto"};
  right: ${({right}) => right || "auto"};
  flex-shrink: ${({shrink}) => shrink || "none"};
  top: ${({top}) => top || "auto"};
  content-visibility: ${({contentVisibility}) => contentVisibility || "visible"}; 
  ${({maxWidth})=> maxWidth === "33.33%" && css`
    @media screen and (max-width: 992px){
      width: 50%;
    }
  `}
`

const Flex = (props) => {
    return <StyledFlex {...props}/>
};


export default Flex;