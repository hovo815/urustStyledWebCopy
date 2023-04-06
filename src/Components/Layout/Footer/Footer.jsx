import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import styled from "styled-components";
import Images from "../../Ui/Images/Images";
import Text from "../../Ui/Text/Text";
import CustomLink from "../../Ui/CustomLink/CustomLink";
import Title from "../../Ui/Title/Title";
import CustomHref from "../../Ui/CustomHref/CustomHref";
import Medium from "../../../Assets/Img/Social/Medium.svg";
import Twitter from "../../../Assets/Img/Social/Twitter.svg";
import Telegram from "../../../Assets/Img/Social/Telegram.svg";
import Github from "../../../Assets/Img/Social/Github.svg";
import Youtube from "../../../Assets/Img/Social/Youtube.svg";
import urustWhite from "../../../Assets/Img/Home/urustWhite.png";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const StyledFooter = styled.footer`
  background: #020710;
  width: 100%;
  height: 100%;
`

const Footer = () => {

    const [width] = useWindowSize()

    return (
        <StyledFooter>
            <Flex
                padding="100px 0 10px"
                backgroundProp="linear-gradient(180deg, #0F1123 0%, rgba(15, 17, 35, 0.83) 48.7%, #0F1123 100%)"
            >
                <Container>
                    <Flex direction="column">
                        <Flex direction={width <= 992 ? "column" : "row"} margin="0 0 40px 0">
                            <Flex margin="0 0 40px 0" align={width <= 992 ? "center" : "stretch"} direction="column">
                                <CustomLink to="/">
                                    <Images width="150px" alt="logo"
                                            src={urustWhite}/>
                                </CustomLink>
                                <Text textAlign={width <= 992 ? "center" : "start"} margin='10px 0 0 0'>
                                    Join the official URUST community and stay up to date with announcements!
                                </Text>
                            </Flex>
                            <Flex margin="0 0 40px 0" align="center" direction="column">
                                <Flex margin="0 0 30px 0" width="auto" height="auto">
                                    <Title padding="0 0 0 10px" borderLeft="2px solid #84366a" size="20px">
                                        SOCIAL MEDIA
                                    </Title>
                                </Flex>
                                <Flex align="center" justify="space-evenly">
                                    <CustomHref
                                        hoverBgColor="#84366a"
                                        height="30px"
                                        width="30px"
                                        border='1px solid white'
                                        borderRadius="30px"
                                        href="/"
                                    >
                                        <Images width="100%" height="18px" alt="medium" src={Medium}/>
                                    </CustomHref>
                                    <CustomHref
                                        hoverBgColor="#84366a"
                                        height="30px"
                                        width="30px"
                                        border='1px solid white'
                                        borderRadius="30px"
                                        href="/"
                                    >
                                        <Images width="100%" height="18px" alt="twitter" src={Twitter}/>
                                    </CustomHref>
                                    <CustomHref
                                        hoverBgColor="#84366a"
                                        height="30px"
                                        width="30px"
                                        border='1px solid white'
                                        borderRadius="30px"
                                        href="/"
                                    >
                                        <Images width="100%" height="18px" alt="telegram" src={Telegram}/>
                                    </CustomHref>
                                    <CustomHref
                                        hoverBgColor="#84366a"
                                        height="30px"
                                        width="30px"
                                        border='1px solid white'
                                        borderRadius="30px"
                                        href="/"
                                    >
                                        <Images width="100%" height="18px" alt="github" src={Github}/>
                                    </CustomHref>
                                    <CustomHref
                                        hoverBgColor="#84366a"
                                        height="30px"
                                        width="30px"
                                        border='1px solid white'
                                        borderRadius="30px"
                                        href="/"
                                    >
                                        <Images width="100%" height="18px" alt="youtube" src={Youtube}/>
                                    </CustomHref>
                                </Flex>
                            </Flex>
                            <Flex margin="0 0 40px 0" align="center" direction="column">
                                <Flex margin="0 0 30px 0" width="auto" height="auto">
                                    <Title padding="0 0 0 10px" borderLeft="2px solid #84366a" size="20px">
                                        DOCUMENT
                                    </Title>
                                </Flex>
                                <Flex direction="column">
                                    <CustomHref margin="10px 0 0 0" href="mailto:support@urust.com">
                                        <Text>Contact Us</Text>
                                    </CustomHref>
                                    <CustomHref margin="10px 0 0 0" href="/">
                                        <Text>Whitepaper</Text>
                                    </CustomHref>
                                    <CustomHref margin="10px 0 0 0" href="/">
                                        <Text>Terms and Conditions</Text>
                                    </CustomHref>
                                    <CustomHref margin="10px 0 0 0" href="/">
                                        <Text>Privacy Policy</Text>
                                    </CustomHref>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex padding="45px 0 0" justify="center">
                            <Text
                                textAlign={width <= 992 ? "center" : "start"}
                            >
                                Copyright ©2022 URUST. All rights reserved.
                            </Text>
                        </Flex>
                    </Flex>
                </Container>
            </Flex>
        </StyledFooter>
    );
};


export default Footer;