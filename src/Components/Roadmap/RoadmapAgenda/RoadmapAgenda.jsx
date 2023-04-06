import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Images from "../../Ui/Images/Images";
import agenta from "../../../Assets/Img/Roadmap/agenta.png";


const RoadmapAgenda = props => {
    return (
        <Flex backgroundProp="#020710">
            <Container>
                <Flex margin="150px 0 0 0" padding="120px 0 0 0" direction="column">
                    <Title  textAlign="center" color="#F548A0" size="52px">
                        Agenda
                    </Title>
                    <Flex margin="150px 0 0 0">
                    <Images maxWidth="100%" alt="agenda" src={agenta}/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default RoadmapAgenda;