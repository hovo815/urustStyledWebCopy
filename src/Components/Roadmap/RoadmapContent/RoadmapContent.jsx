import React from 'react';
import Flex from "../../Ui/Flex/Flex";
import RoadmapAgenda from "../RoadmapAgenda/RoadmapAgenda";
import RoadmapUserAgent from "../RoadmapUserAgent/RoadmapUserAgent";


const RoadmapContent = () => {
    return (
        <Flex direction="column">
            <RoadmapAgenda/>
            <RoadmapUserAgent/>
        </Flex>
    );
};


export default RoadmapContent;