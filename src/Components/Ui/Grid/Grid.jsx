import React from 'react';
import styled, {css} from "styled-components";

const StyledGrid = styled.div`
  display: grid;
  width: ${({width}) => width || "100%"};
  grid-auto-columns: ${({gridAutoColumns}) => gridAutoColumns || "1fr"};
  grid-column-gap: ${({columnGap}) => columnGap || "20px"};
  grid-row-gap: ${({rowGap}) => rowGap || "20px"};
  -ms-grid-columns: ${({gridColumns}) => gridColumns || "1fr 1fr 1fr"};
  grid-template-columns: ${({gridTemplateColumns}) => gridTemplateColumns || "1fr 1fr 1fr"};
  box-shadow: ${({shadow}) => shadow || "0"};
  border-radius: ${({borderRadius}) => borderRadius || "0px"};
  justify-items: center;
  grid-template-rows: auto;
  padding: ${({padding}) => padding || "0"};
  margin: ${({padding}) => padding || "0"};
  @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
  ${({cards})=> cards && css`
  @media screen and (max-width: 992px){
    grid-template-columns: 1fr 1fr;
    
  }
    @media screen and (max-width: 768px){
      grid-template-columns: 1fr;

    }
  `}
`

const Grid = (props) => {
    return <StyledGrid{...props}/>
};


export default Grid;