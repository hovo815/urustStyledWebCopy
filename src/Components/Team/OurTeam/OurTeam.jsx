import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Grid from "../../Ui/Grid/Grid";
import Cards from "../../Ui/Cards/Cards";
import Images from "../../Ui/Images/Images";
import Text from "../../Ui/Text/Text";
import {teamData} from "./TeamData"

const OurTeam = props => {
    return (
        <Flex backgroundProp="#020710">
            <Container>
                <Flex margin="150px 0 0 0" padding="120px 0 200px 0" direction="column">
                    <Title margin="0 0 25px" textAlign="center" main size="48px" color="#F548A0">
                        Our Team
                    </Title>
                    <Grid>
                        {teamData.map(item => (
                            <Cards key={item.id} align="center" backgroundProp="#0B111B" padding="20px 20px">
                                <Flex align="center" maxWidth="190px" height="190px">
                                    <Images
                                        borderRadiusCustom="100px"
                                        width="100%"
                                        height="100%"
                                        src={item.image}
                                        alt={item.name}
                                    />
                                </Flex>
                                <Title size="18px" margin="15px 0 0 0">
                                    {item.name}
                                </Title>
                                <Text size="13px" color="#ee7ea4">
                                    {item.profession}
                                </Text>
                                <Text size="14px" margin="20px 0 0 0">
                                    {item.description}
                                </Text>
                            </Cards>
                        ))}

                    </Grid>
                </Flex>
            </Container>
        </Flex>
    );
};


export default OurTeam;