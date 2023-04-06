import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import Images from "../../Ui/Images/Images";
import Cards from "../../Ui/Cards/Cards";
import Grid from "../../Ui/Grid/Grid";
import img1 from "../../../Assets/Img/Home/img1.png";
import img2 from "../../../Assets/Img/Home/img2.png";
import img3 from "../../../Assets/Img/Home/img3.png";
import img4 from "../../../Assets/Img/Home/img4.png";
import img5 from "../../../Assets/Img/Home/img5.png";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const HomeThirdSection = () => {

    const [width] = useWindowSize()

    return (
        <Flex backgroundProp="#020710">
            <Container>
                <Flex direction="column">
                    <Title
                        size="54px"
                        color="#84366a"
                        textAlign="center"
                    >
                        URUST GLOBAL’S DISTINGUISHED METAVERSE SUITE
                    </Title>
                    <Grid gridTemplateColumns=" 1fr 1fr" wrap="wrap" margin="100px 0 0 0" justify='center'>
                        <Flex
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            padding="0 15px"
                            justigy="center"
                            width={width <= 992 ? "100%" : "66%"}
                            direction="column"
                            margin="35px"
                        >
                            <Cards border="1px solid #84366a" padding="55px 12px 40px" direction="column">
                                <Flex justify="center">
                                    <Images
                                        height="100px"
                                        maxWidth="100%"
                                        alt="urustI"
                                        src={img1}
                                    />
                                </Flex>
                                <Flex align="center" direction="column">
                                    <Title
                                        margin="42px 0 20px"
                                        textAlign="center"
                                        size="24px"
                                        color="#84366a"
                                    >
                                        User Agent
                                    </Title>
                                    <Text size="17px">
                                        Urust Global provides a mobile user-agent application and all dominant
                                        blockchains’
                                        major token standards.
                                    </Text>
                                </Flex>
                            </Cards>
                        </Flex>
                        <Flex
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            padding="0 15px"
                            justigy="center"
                            width={width <= 992 ? "100%" : "66%"}
                            direction="column"
                            margin="35px"
                        >
                            <Cards border="1px solid #84366a" padding="55px 12px 40px" direction="column">
                                <Flex justify="center">
                                    <Images
                                        height="100px"
                                        maxWidth="100%"
                                        alt="urustI"
                                        src={img2}
                                    />
                                </Flex>
                                <Flex align="center" direction="column">
                                    <Title
                                        margin="42px 0 20px"
                                        textAlign="center"
                                        size="24px"
                                        color="#84366a"
                                    >
                                        KYC-as-a-Service
                                    </Title>
                                    <Text size="17px">
                                        The standard KYC procedure is designed to perform legacy identity verification
                                    </Text>
                                </Flex>
                            </Cards>
                        </Flex>
                    </Grid>
                    <Grid cards margin="35px 0 0 0" justify='center'>
                        <Flex
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            padding="0 15px"
                            justigy="center"
                            width="100%"
                            direction="column"
                            margin="35px"
                        >
                            <Cards border="1px solid #84366a" padding="55px 12px 40px" direction="column">
                                <Flex justify="center">
                                    <Images
                                        height="100px"
                                        maxWidth="100%"
                                        alt="urustI"
                                        src={img3}
                                    />
                                </Flex>
                                <Flex align="center" direction="column">
                                    <Title
                                        margin="42px 0 20px"
                                        textAlign="center"
                                        size="24px"
                                        color="#84366a"
                                    >
                                        Consolidated ID
                                    </Title>
                                    <Text size="17px">
                                        Urust Global provides a mechanism for an individual to obtain a Consolidated ID
                                        (CID), which amalgamates all of his/her existing Web 2.0-based IDs.
                                    </Text>
                                </Flex>
                            </Cards>
                        </Flex>
                        <Flex
                            data-aos="fade-up"
                            data-aos-duration="3000"
                            padding="0 15px"
                            justigy="center"
                            width="100%"
                            direction="column"
                            margin="35px"
                        >
                            <Cards border="1px solid #84366a" padding="55px 12px 40px" direction="column">
                                <Flex justify="center">
                                    <Images
                                        height="100px"
                                        maxWidth="100%"
                                        alt="urustI"
                                        src={img4}
                                    />
                                </Flex>
                                <Flex align="center" direction="column">
                                    <Title
                                        margin="42px 0 20px"
                                        textAlign="center"
                                        size="24px"
                                        color="#84366a"
                                    >
                                        Currency Auto-Conversion
                                    </Title>
                                    <Text size="17px">
                                        Urust Global furnishes an auto-conversion functionality that allows users to pay
                                        Urust Global’s native currency for services and to all merchants.
                                    </Text>
                                </Flex>
                            </Cards>
                        </Flex>
                        <Flex
                            data-aos="fade-up"
                            data-aos-duration="2000"
                            padding="0 15px"
                            justigy="center"
                            width="100%"
                            direction="column"
                            margin="35px"
                        >
                            <Cards border="1px solid #84366a" padding="55px 12px 70px" direction="column">
                                <Flex justify="center">
                                    <Images
                                        height="100px"
                                        maxWidth="100%"
                                        alt="urustI"
                                        src={img5}
                                    />
                                </Flex>
                                <Flex align="center" direction="column">
                                    <Title
                                        margin="42px 0 20px"
                                        textAlign="center"
                                        size="24px"
                                        color="#84366a"
                                    >
                                        Omni Bridge
                                    </Title>
                                    <Text size="17px">
                                        Urust Global’s Omni Bridge is designed to be a mechanism that seamlessly
                                        connects all these heterogeneous platforms together.
                                    </Text>
                                </Flex>
                            </Cards>
                        </Flex>
                    </Grid>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeThirdSection;