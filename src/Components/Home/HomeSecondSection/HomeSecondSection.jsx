import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import Container from "../../Ui/Container/Container";
import Images from "../../Ui/Images/Images";
import Title from "../../Ui/Title/Title";
import Text from "../../Ui/Text/Text";
import dm from "../../../Assets/Img/Home/dm.png";
import im from "../../../Assets/Img/Home/im.png";
import creditCard from "../../../Assets/Img/Home/creditCard.png";
import {useWindowSize} from "../../../Hooks/useWindowSize";


const HomeSecondSection = () => {
    const [width] = useWindowSize()
    return (
        <Flex backgroundProp="#020710" padding="20px 0 0 0 ">
            <Container>
                <Flex overflowX="hidden" direction="column">
                    <Flex direction={width <= 992 ? "column" : "row"} data-aos="fade-left">
                        <Flex padding="0 15px">
                            <Images maxWidth="100%" alt="dm" src={dm}/>
                        </Flex>
                        <Flex padding="0 15px" margin="30px 0 0 0" direction="column">
                            <Title margin="0 0 16px 0" size="36px" color="#F548A0 ">Decentralised Metaverse</Title>
                            <Text margin="0 0 16px 0">
                                The notion of Metaverse arguably refers to the digitalization and dematerialization of a
                                great many facets of our surroundings and activities. It is uncontested that the
                                Metaverse will not only affect but also become part of everyone’s future.
                            </Text>
                            <Text margin="0 0 16px 0">
                                As our society values freedom above all else, it is necessary to keep the provisioning
                                of Metaverse and its inclusion in the control of the people, as opposed to leaving it
                                for a selected few Big Tech. To this end, decentralization is the only provably feasible
                                approach. The Decentralised Metaverse, which is built atop the Decentralized Ledger
                                Technology (DLT), is the one and only Metaverse that will prevail.
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex direction={width <= 992 ? "column" : "row-reverse"} data-aos="fade-right">
                        <Flex padding="0 15px">
                            <Images maxWidth="100%" alt="im" src={im}/>
                        </Flex>
                        <Flex padding="0 15px" margin="30px 0 0 0" direction="column">
                            <Title margin="0 0 16px 0" size="36px" color="#F548A0 ">Identities in the Metaverse</Title>
                            <Text margin="0 0 16px 0">
                                Digital identities will play the central role in the Metaverse. They equip people from
                                every walk of life with a capability of expressing and presenting themselves in new
                                ways, allowing for new forms of interaction. As the metaverse itself needs
                                decentralizing, the issuance, management and utilization of these digital identities
                                also necessitate decentralization.
                            </Text>
                            <Text margin="0 0 16px 0">
                                We take a dual approach to tackle the aforementioned sine qua non. On the one hand, the
                                digital identity can be represented by a Soul Bound Token (SBT) that tenants a
                                decentralized ledger (aka blockchain). SBTs are issued and bound to unique blockchain
                                accounts or wallets associated with specific individuals. On the other hand, Urust
                                Global follows and contributes to the open standard set forth by W3C Decentralized
                                Identifier Working Group and the Decentralized Identity Foundation (DIF).
                            </Text>
                        </Flex>
                    </Flex>
                    <Flex direction={width <= 992 ? "column" : "row"} data-aos="fade-left">
                        <Flex padding="0 15px">
                            <Images maxWidth="100%" alt="card" src={creditCard}/>
                        </Flex>
                        <Flex padding="0 15px" margin="30px 0 0 0" direction="column">
                            <Title margin="0 0 16px 0" size="36px" color="#F548A0 ">Transacting in the Metaverse</Title>
                            <Text margin="0 0 16px 0">
                                The traditional financial systems include too many hindrances, whereas the native crypto
                                solutions typically lack necessary KYC and AML measurements. Urust Global strikes a
                                delicate balance between DTL-empowered cross-border payment and the rigorousness and
                                accountability of any large-scale transaction system.
                            </Text>
                            <Text margin="0 0 16px 0">
                                We build atop Ripple Liquidity Hub that has inherent support for digital assets from
                                global crypto markets. In addition, our platform is intentionally built to be
                                EVM-compatible, allowing the merge between legacy systems with the smart contracts
                                incorporating decentralized finance business logic on the blockchains, in particular
                                Binance Smart Chain and Ethereum.
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Flex>
    );
};


export default HomeSecondSection;