import React from 'react';
import {useRoutes} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Team from "./Pages/Team/Team";
import Tokenomics from "./Pages/Tokenomics/Tokenomics";
import Roadmap from "./Pages/Roadmap/Roadmap";

const Routing = () => {

    return useRoutes([
        {
            path: "/",
            element: <Home/>,
        },
        {
            path: "team",
            element: <Team/>,
        },
        {
            path: "tokenomics",
            element: <Tokenomics/>,
        },
        {
            path: "roadmap",
            element: <Roadmap/>,
        },
    ])
};


export default Routing;