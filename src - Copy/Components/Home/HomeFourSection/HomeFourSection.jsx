import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import Button from "../../Ui/Button/Button";
import CustomHref from "../../Ui/CustomHref/CustomHref";
import CustomLink from "../../Ui/CustomLink/CustomLink";
import Images from "../../Ui/Images/Images";
import crypto from "../../../Assets/Img/Home/crypto.png"
import {useWindowSize} from "../../../Hooks/useWindowSize";


const HomeFourSection = () => {
    const [width] = useWindowSize()
    return (
        <Flex padding="250px 0 0 0" backgroundProp="#020710">
            <Container>
                <Flex direction={width <= 992 ? "column" : "row"}>
                    <Flex direction="column">
                        <Title size="36px" color="#f5597d">URUST</Title>
                        <Text>
                            Urust Global truly embraces the decentralization credo and bakes into our own skeleton a
                            decentralized governance structure. This is facilitated by the indigenous token named URUST.
                        </Text>
                        <Flex>
                            <CustomLink to="/tokenomics">
                                <Button border="1px solid #f5597d" backgroundProp="none">
                                    Learn More
                                </Button>
                            </CustomLink>
                            <CustomHref margin="0 0 0 5px " href="/">
                                <Button>
                                    Audit
                                </Button>
                            </CustomHref>
                        </Flex>
                    </Flex>
                    <Flex padding=" 0 70px" >
                        <Images alt="crypto" maxWidth="100%" src={crypto}/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeFourSection;