import React, {useEffect} from 'react';
import Flex from "../../Ui/Flex/Flex";
import HomeFirstSection from "../HomeFirstSection/HomeFirstSection";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeSecondSection from "../HomeSecondSection/HomeSecondSection";
import HomeThirdSection from "../HomeThirdSection/HomeThirdSection";
import HomeFourSection from "../HomeFourSection/HomeFourSection";
import HomePressCoverage from "../HomePressCoverage/HomePressCoverage";

const HomeContent = () => {
    useEffect(()=>{
       AOS.init()
    },[])

    return (
        <Flex  direction="column">
            <HomeFirstSection/>
            <HomeSecondSection/>
            <HomeThirdSection/>
            <HomeFourSection/>
            <HomePressCoverage/>
        </Flex>
    );
};


export default HomeContent;