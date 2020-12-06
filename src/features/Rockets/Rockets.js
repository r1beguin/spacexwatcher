import React from "react"

import {Box, Image, ResponsiveContext, Text} from "grommet";

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";


import falcon from "../../images/falcon.png";
import heavy from "../../images/heavy.png";
import starship from "../../images/starship.png";

const LastLaunch = () => {

    const size = React.useContext(ResponsiveContext);
    return (
        
            <Card round="small" pad="medium" gap="medium" fill>
                <GradientText weight="bold" size="medium">Space X launchers</GradientText>
                <Box gap="small" >
                    <Box height="small" direction="row" gap="small">
                        <Box width="small">
                            <Image src={falcon} fit="contain"></Image>
                        </Box>
                        <Card round="small" pad="small" fill>
                            <Text weight="bold" size={size}>Falcon 9</Text>
                        </Card>
                    </Box>
                    <Box height="small" direction="row" gap="small">
                        <Box width="small">
                            <Image src={heavy} fit="contain"></Image>
                        </Box>
                        <Card round="small" pad="small" fill>
                            <Text weight="bold" size={size}>Falcon Heavy</Text>
                        </Card>
                    </Box>
                    <Box height="small" direction="row" gap="small">
                        <Box width="small">
                            <Image src={starship} fit="contain"></Image>
                        </Box>
                        <Card round="small" pad="small" fill>
                            <Text weight="bold" size={size}>Starship</Text>
                        </Card>
                    </Box>
                   
                </Box>
            </Card>
          
    )
}

export default LastLaunch;