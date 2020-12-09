import React from "react";

import {Box} from "grommet";

import LastLaunch from "../lastlaunch/LastLaunch";
import NavBar from "../navbar/Navbar";
import Social from "../Social/Social";
import Rockets from "../Rockets/Rockets";
import Tracker from "../Tracker/Tracker";


const Layout = () => {



    return(
        <Box justify="between" fill>
            <Box gap="medium" margin={{bottom:"medium"}}>
                <NavBar/>
                <Box direction="row" gap="medium">
                    <LastLaunch />
                    <Box gap="medium" fill>
                        <Rockets/> 
                        <Tracker />
                    </Box>
                    
                </Box>
            </Box>
            <Social />
        </Box>
    )
}


export default Layout;