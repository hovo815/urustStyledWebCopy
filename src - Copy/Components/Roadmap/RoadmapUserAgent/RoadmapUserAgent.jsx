import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import PhoneSlider from "../../Ui/PhoneSlider/PhoneSlider";
import {firstPhoneSlider} from "./FirstPhoneSlider";
import {secondPhoneSlider} from "./SecondPhoneSlider";
import {thirdPhoneSlider} from "./ThirdPhoneSlider";
import {useWindowSize} from "../../../Hooks/useWindowSize";

const RoadmapUserAgent = () => {
    const [width] = useWindowSize()
    return (
        <Flex backgroundProp="#020710">
            <Container>
                <Flex margin="150px 0 0 0" padding="120px 0 200px 0" direction="column">
                    <Flex direction="column" align="center">
                        <Title textAlign="center" color="#F548A0" size="52px">
                            URUST User-Agent
                        </Title>
                        <Text maxWidth="800px" textAlign="center">
                            URUST User-Agent is a mobile super app, which encompasses various functionalities and
                            present them all to you in your own palm. These functionalities include:
                        </Text>
                    </Flex>
                    <Flex direction="column" padding="80px 0 0 0">
                        <Flex direction={width <= 992 ? "column" : "row"} align="center">
                            <Flex direction="column" justify="center">
                                <Title size="22px" color="#F548A0">
                                    1. Transactional Payment
                                </Title>
                                <Text>
                                    - Payment can be made/received simply by scanning/showing your QR code
                                </Text>
                                <Text>
                                    - Manage your virtual URUST Credit Card
                                </Text>
                            </Flex>
                            <Flex width={width <= 992 ? "100%" : "50%"}>
                                <PhoneSlider data={firstPhoneSlider}/>
                            </Flex>
                        </Flex>
                        <Flex direction={width <= 992 ? "column" : "row"} padding="80px 0 0 0" align="center">
                            <Flex direction="column" justify="center">
                                <Title size="22px" color="#F548A0">
                                    2. Multi-currency wallet, covering both fiat and crypto
                                </Title>
                                <Text>
                                    - Users can also convert their assets with a single-click
                                </Text>
                            </Flex>
                            <Flex width={width <= 992 ? "100%" : "50%"}>
                                <PhoneSlider data={secondPhoneSlider}/>
                            </Flex>
                        </Flex>
                        <Flex direction={width <= 992 ? "column" : "row"} padding="80px 0 0 0" align="center">
                            <Flex direction="column" justify="center">
                                <Title size="22px" color="#F548A0">
                                    3. Consolidated ID and eKYC
                                </Title>
                                <Text>
                                    - eKYC function automates and facilitates the KYC using AI-powered image and video
                                    processing
                                </Text>
                                <Text>
                                    - KYC once, login everywhere
                                </Text>
                            </Flex>
                            <Flex width={width <= 992 ? "100%" : "50%"}>
                                <PhoneSlider data={thirdPhoneSlider}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default RoadmapUserAgent;