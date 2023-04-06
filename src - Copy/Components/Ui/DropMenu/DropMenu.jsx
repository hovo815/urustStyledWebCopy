import React from 'react';
import Flex from "../Flex/Flex";
import CustomLink from "../CustomLink/CustomLink";


const DropMenu = ({relative}) => {
    return (
        <Flex
            borderRadius="3px"
            minWidth={relative ? "100%" : "230px"}
            height="110px"
            left="0"
            top={relative ? "auto" : "50px"}
            backgroundProp="rgba(23, 25, 43, 0.7)"
            direction="column"
            position={relative ? "static" : "absolute"}
            zIndex="91"
        >
            <CustomLink
                hoverColor="white"
                color="white"
                backgroundHover="#84366a"
                size="14px"
                padding="15px 20px"
                to="/team"
            >
                Team
            </CustomLink>
            <CustomLink
                hoverColor="white"
                color="white"
                backgroundHover="#84366a"
                size="14px"
                padding="15px 20px"
                to="/"
            >
                Whitepaper
            </CustomLink>
        </Flex>
    );
};


export default DropMenu;