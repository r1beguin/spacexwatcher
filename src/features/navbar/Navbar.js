import React from "react"

import {Link} from "react-router-dom"

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";
import MiniButton from "../../components/MiniButton";

import logo from "../../images/logo.png";
import { Image, Box } from "grommet";


const NavBar = () => {


    return (
        <Card round="small" pad={{vertical:"small", horizontal:"medium"}} direction="row" align="center" gap="medium">
            <Link to="/">
                <MiniButton round="full" height="xxsmall" width="xxsmall" align="center" justify="center" overflow="hidden">
                    <Box>
                        <Image fit="contain" src={logo} />
                    </Box>
                </MiniButton>
            </Link>
            <GradientText weight="bold" size="large">SpaceX Watcher</GradientText>
        </Card>
    )
}

export default NavBar;