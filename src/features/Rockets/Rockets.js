import React from "react"

import {Box, Image, ResponsiveContext, Text} from "grommet";

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";

import { Scrollbars } from 'react-custom-scrollbars';

import falcon from "../../images/falcon.png";
import heavy from "../../images/heavy.png";
import starship from "../../images/starship.png";

import data from "../../falcon.json";

const LastLaunch = () => {

    const [showFalcon, setShowFalcon] = React.useState(false);
    const [showHeavy, setShowHeavy] = React.useState(false);
    const [showStarship, setShowStarship] = React.useState(false);

    const size = React.useContext(ResponsiveContext);
    return (
        
            <Card round="small" pad="medium" gap="medium" fill>
                <GradientText weight="bold" size="medium">Space X launchers</GradientText>
                <Scrollbars autoHeight autoHide autoHeightMax="100%">
                    <Box gap="small" >
                        <Box height="small" direction="row" gap="small">
                            {!showFalcon &&
                                <Box width="small" onClick={()=> setShowFalcon(true)}>
                                    <Image src={falcon} fit="contain"></Image>
                                </Box>
                            }
                            
                            {(size !== "small" || showFalcon) &&
                            <Card round="small" pad="small" fill onClick={() => setShowFalcon(false)}>
                                <Text weight="bold" size={size}>Falcon 9</Text>
                                <Text size={size}>height : {data.launcher_config.length} m</Text>
                                <Text size={size}>payload leo : {data.launcher_config.leo_capacity} kg</Text>
                                <Text size={size}>payload gto :  {data.launcher_config.gto_capacity} kg</Text>
                                <Text size={size}>version : {data.launcher_config.variant}</Text>
                            </Card>
                            }
                        </Box>
                        <Box height="small" direction="row" gap="small">
                            {!showHeavy &&
                                <Box width="small" onClick={()=> setShowHeavy(true)}>
                                    <Image src={heavy} fit="contain"></Image>
                                </Box>
                            }
                            
                            {(size !== "small" || showHeavy) &&
                            <Card round="small" pad="small" fill onClick={() => setShowHeavy(false)}>
                                <Text weight="bold" size={size}>Falcon Heavy</Text>
                                <Text size={size}>height : 70 m</Text>
                                <Text size={size}>payload leo : 63800 kg</Text>
                                <Text size={size}>payload gto :  26700 kg</Text>
                                <Text size={size}>version : v1.0</Text>
                            </Card>
                            }
                        </Box>
                        <Box height="small" direction="row" gap="small">
                            {!showStarship &&
                                <Box width="small" onClick={()=> setShowStarship(true)}>
                                    <Image src={starship} fit="contain"></Image>
                                </Box>
                            }
                            
                            {(size !== "small" || showStarship) &&
                            <Card round="small" pad="small" fill onClick={() => setShowStarship(false)}>
                                <Text weight="bold" size={size}>Starship</Text>
                                <Text size={size}>height : 122 m</Text>
                                <Text size={size}>payload leo : 100 000+ kg</Text>
                                <Text size={size}>payload gto :  tbd</Text>
                                <Text size={size}>version : SN8</Text>
                            </Card>
                            }
                        </Box>
                    
                    
                    </Box>
                </Scrollbars>
            </Card>
          
    )
}

export default LastLaunch;