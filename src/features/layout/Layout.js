import React from "react";

import {Box} from "grommet";

import LastLaunch from "../lastlaunch/LastLaunch";
import NavBar from "../navbar/Navbar";
import Social from "../Social/Social";
import Rockets from "../Rockets/Rockets";


const Layout = () => {



    return(
        <Box justify="between" fill>
            <Box gap="medium">
                <NavBar/>
                <Box direction="row" gap="medium">
                    <LastLaunch />
                    <Rockets/>  
                </Box>
            </Box>
            <Social />
        </Box>
    )
}


export default Layout;