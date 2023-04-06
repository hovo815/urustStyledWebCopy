import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import SwiperSlider from "../../Ui/SwiperSlider/SwiperSlider";
import {FirstLineImages} from "./FisrtLineImages";
import {SecondLineImages} from "./SecondLineImages";
import {PartnersFirstLine} from "./PartnersFirstLine";
import {PartnersSecondLine} from "./PartnersSecondLine";


const HomePressCoverage = () => {
    return (
        <Flex padding="250px 0 0 0" backgroundProp="#020710">
            <Container>
                <Flex direction="column">
                    <Flex padding="80px" direction="column">
                        <Title
                            textAlign="center"
                            color="#F548A0"
                            size="36px"
                            margin="0 0 16px 0"
                        >
                            Press Coverage
                        </Title>
                        <Flex direction="column">
                            <Flex minHeight="50px">
                                <SwiperSlider data={FirstLineImages}/>
                            </Flex>
                            <Flex minHeight="50px">
                                <SwiperSlider data={SecondLineImages}/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex padding="80px" direction="column">
                        <Title
                            textAlign="center"
                            color="#F548A0"
                            size="36px"
                            margin="0 0 16px 0"
                        >
                            Partner
                        </Title>
                        <Flex direction="column">
                            <Flex minHeight="50px">
                                <SwiperSlider data={PartnersFirstLine}/>
                            </Flex>
                            <Flex minHeight="50px">
                                <SwiperSlider data={PartnersSecondLine}/>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomePressCoverage;