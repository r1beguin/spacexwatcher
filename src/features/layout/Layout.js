import React from "react";

import {Box} from "grommet";

import LastLaunch from "../lastlaunch/LastLaunch";
import NavBar from "../navbar/Navbar";
import Social from "../Social/Social";


const Layout = () => {



    return(
        <Box justify="between" fill>
            <Box gap="medium">
                <NavBar/>
                <LastLaunch />
            </Box>
            <Social />
        </Box>
    )
}


export default Layout;