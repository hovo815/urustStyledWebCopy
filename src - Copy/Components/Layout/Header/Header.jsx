import React, {useState} from 'react';
import styled from "styled-components";
import Container from "../../Ui/Container/Container";
import Flex from "../../Ui/Flex/Flex";
import Images from "../../Ui/Images/Images";
import {useScroll} from "../../../Hooks/useScroll";
import CustomLink from "../../Ui/CustomLink/CustomLink";
import Button from "../../Ui/Button/Button";
import Down from "../../../Assets/Img/Icons/Down.svg"
import DropMenu from "../../Ui/DropMenu/DropMenu";
import {useWindowSize} from "../../../Hooks/useWindowSize";
import BurgerMenu from "../../Ui/BurgerMenu/BurgerMenu";
import urustWhite from "../../../Assets/Img/Home/urustWhite.png";

const StyledHeader = styled.header`
  background: ${({backgroundProp}) => backgroundProp || "transparent"};
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 90;
  padding:${({padding})=> padding || 0};
  transition: all 0.4s ease-out;
  box-shadow: ${({shadow})=> shadow ? "0 13px 35px -12px rgb(35 35 35 / 10%)" : "0"};
`

const Header = () => {
    const [open,setOpen] = useState(false)
    const [width] = useWindowSize()
    const offset = useScroll()

    return (
        <StyledHeader
            shadow={offset >= 1}
            padding={offset >= 1 ? "0 40px" : "30px 40px"}
            backgroundProp={offset >= 1 ? "#17192b" : "transparent"}
            onMouseLeave={()=>setOpen(false)}
        >
            <Container>
                <Flex align="center">
                    <Flex width="50%" height="90px">
                        {offset >= 1 ?
                            <Images alt="logo" width="150px" src={urustWhite}/>
                            :
                            <Images alt="logo" width="150px" src={urustWhite}/>
                        }
                    </Flex>
                    <Flex width="100%"  align="center" justify="flex-end">
                    {width <=992 ? <BurgerMenu/> :
                        <Flex  align="center" justify="flex-end">
                            <CustomLink margin="0 20px" hoverColor="#F548A0" to="/">
                                Home
                            </CustomLink>
                            <Flex margin="0 20px" direction="column" position="relative" width="auto">
                                <Button
                                    backgroundProp="none"
                                    onClick={()=>setOpen(true)}
                                    onMouseOver={()=>setOpen(true)}
                                    hoverColor="#F548A0"
                                >
                                    About Us <Images src={Down}/>
                                </Button>
                                {open ? <DropMenu/> : null}
                            </Flex>
                            <CustomLink margin="0 20px" hoverColor="#F548A0"  to="/roadmap">
                                Roadmap
                            </CustomLink>
                            <CustomLink margin="0 20px" hoverColor="#F548A0"  to="/tokenomics">
                                Tokenomics
                            </CustomLink>
                        </Flex>
                    }
                    </Flex>
                </Flex>
            </Container>
        </StyledHeader>
    );
};


export default Header;