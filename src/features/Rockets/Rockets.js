import React from "react"

import {Box, Image} from "grommet";

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";


import falcon from "../../images/falcon.png";
import heavy from "../../images/heavy.png";
import starship from "../../images/starship.png";

const LastLaunch = () => {


    return (
        
            <Card round="small" pad="medium" gap="medium">
                <GradientText weight="bold" size="medium">Space X launchers</GradientText>
                <Box gap="small" >
                    <Box height="small">
                        <Image src={falcon} fit="contain"></Image>
                    </Box>
                    <Box height="small">
                        <Image src={heavy} fit="contain"></Image>
                    </Box>
                    <Box height="small">
                        <Image src={starship} fit="contain"></Image>
                    </Box>
                </Box>
            </Card>
          
    )
}

export default LastLaunch;