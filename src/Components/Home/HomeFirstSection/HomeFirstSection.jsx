import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Video from "../../Ui/Video/Video";
import MainVideo from "../../../Assets/Video/HomeVideo.mp4"
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import {useScroll} from "../../../Hooks/useScroll";
import Button from "../../Ui/Button/Button";
import CustomHref from "../../Ui/CustomHref/CustomHref";

const HomeFirstSection = () => {
    const offset = useScroll()
    return (
        <Flex>
            <Container>
                <Flex padding="10% 0 0 0" align="center">
                    <Flex align="center" padding="150px 0 0 0" direction="column">
                        <Title textAlign="center">URUST GLOBAL</Title>
                        {offset >= 1 ?
                            <Text margin="1rem 0" size="22px" textAlign="center">
                                Substratum Of The Decentralized MetaverseL
                            </Text>
                            :
                            <Flex minHeight="25.333px" height="25.333px" margin="1rem 0"></Flex>
                        }
                        <CustomHref margin="70px 0 0 0" width="fit-content" href="/">
                            <Button>
                                Join Now
                            </Button>
                        </CustomHref>
                        <Flex
                            width="100%"
                            padding="20px"
                            margin="50px 0 0 0"
                            borderRadius="15px"
                            backgroundProp="rgba(23, 25, 43, 0.7)"
                        >
                            <Flex direction='column'>
                                <Text>FairLaunch STAGE 3 : Dec 11, 2022</Text>
                                <Text>Price $0.75</Text>
                            </Flex>
                            <Flex direction="column">
                                <Text>
                                    IFO : Jan 15, 2023 | Price $1.25
                                </Text>
                                <Text>
                                    Planned Listing : Jan 28, 2023 | Min Price $2
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
            <Video height="210%" alt="home world globe" src={MainVideo}/>
        </Flex>
    );
};


export default HomeFirstSection;