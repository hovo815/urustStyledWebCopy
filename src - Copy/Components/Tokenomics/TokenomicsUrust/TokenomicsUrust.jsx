import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import Images from "../../Ui/Images/Images";
import TokenomicsImg from '../../../Assets/Img/Tokenomics/TokenomicsImg.png'


const TokenomicsUrust = () => {
    return (
        <Flex backgroundProp="#020710">
            <Container>
                <Flex margin="150px 0 0 0" padding="120px 0 200px 0" direction="column">
                    <Title textAlign="center" color="#F548A0" size="52px">URUST</Title>
                    <Flex margin="80px 0 0 0">
                        <Text size="18px" color="#F548A0" >Total supply :</Text>
                        <Text>80,000,000 URUST</Text>
                    </Flex>
                    <Flex >
                        <Text size="18px" color="#F548A0" >Token Name :</Text>
                        <Text>Urust Global</Text>
                    </Flex>
                    <Flex>
                        <Text size="18px" color="#F548A0" >Native crypto symbol :</Text>
                        <Text>URUST</Text>
                    </Flex>
                    <Flex >
                        <Text size="18px" color="#F548A0" >Token Standard:</Text>
                        <Text>BEP20</Text>
                    </Flex>
                    <Flex >
                        <Text size="18px" color="#F548A0" >Contract :</Text>
                        <Text>0xf52ce0a22a70...</Text>
                    </Flex>
                    <Flex margin="80px 0 0 0 ">
                    <Images maxWidth="100%" alt="tokenomics" src={TokenomicsImg}/>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default TokenomicsUrust;