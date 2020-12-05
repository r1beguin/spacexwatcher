import React from "react";

import {Box} from "grommet";

import LastLaunch from "../lastlaunch/LastLaunch";
import NavBar from "../navbar/Navbar";


const Layout = () => {



    return(
        <Box gap="medium">
            <NavBar/>
            <LastLaunch />
        </Box>
    )
}


export default Layout;