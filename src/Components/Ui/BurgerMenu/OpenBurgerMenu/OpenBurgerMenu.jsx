import React, {useState} from 'react';
import Flex from "../../Flex/Flex";
import Button from "../../Button/Button";
import CustomLink from "../../CustomLink/CustomLink";
import Images from "../../Images/Images";
import DropMenu from "../../DropMenu/DropMenu";
import Close from "../../../../Assets/Img/Icons/Close.svg";
import Down from "../../../../Assets/Img/Icons/Down.svg";
import Cards from "../../Cards/Cards";


const OpenBurgerMenu = ({setOpen}) => {
    const [dropMenuOpen, setDropMenuOpen] = useState(false)
    return (
        <Flex direction="column">
            <Flex>
                <Flex

                    justify="flex-end"
                    align="center"

                >
                    <Button width="50px" onClick={() => setOpen(false)}>
                        <Images height="40px" alt="burger menu" src={Close}/>
                    </Button>
                </Flex>
                <Flex
                    backgroundProp="#17192b"
                    top="100%"
                    left="0"
                    zIndex="990"
                    direction="column"
                    position="absolute"
                    height="fit-content"
                    overflowY="scroll"
                    maxHeight="70vh"
                    width="100vw"
                >
                    <Cards borderRadius="0" border="1px solid rgba(255, 255, 255, 0.1)">
                        <CustomLink margin="0 20px" hoverColor="#F548A0" to="/">
                            Home
                        </CustomLink>
                    </Cards>
                    <Cards
                        minHeight="auto"
                        height="fit-content"
                        borderRadius="0"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                    >
                        <Flex
                            margin="0 20px"
                            height="fit-content"
                            justify='flex-start'
                            direction="column"
                            width="100%"
                        >
                            <Button
                                justify="space-between"
                                backgroundProp="none"
                                onClick={() => setDropMenuOpen(!dropMenuOpen)}
                                onMouseOver={() => setDropMenuOpen(true)}
                                hoverColor="#F548A0"
                                width="95%"
                                height="100%"
                                margin="0 0 20px 0"
                            >
                                About Us <Images width="10px" src={Down}/>
                            </Button>
                            {dropMenuOpen ? <DropMenu relative/> : null}
                        </Flex>
                    </Cards>
                    <Cards borderRadius="0" border="1px solid rgba(255, 255, 255, 0.1)">
                        <CustomLink margin="0 20px" hoverColor="#F548A0" to="/roadmap">
                            Roadmap
                        </CustomLink>
                    </Cards>
                    <Cards borderRadius="0" border="1px solid rgba(255, 255, 255, 0.1)">
                        <CustomLink margin="0 20px" hoverColor="#F548A0" to="/tokenomics">
                            Tokenomics
                        </CustomLink>
                    </Cards>

                </Flex>

            </Flex>
        </Flex>

    )
        ;
};


export default OpenBurgerMenu;