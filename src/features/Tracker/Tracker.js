import React from "react"

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";
import ConcaveButton from "../../components/ConcaveButton";

import ReactGlobe from 'react-globe';

import starlink from "./starlink.txt";

import { getLatLngObj, getSatelliteName } from "tle.js";
import {  Box , Collapsible} from "grommet";
import { Pause, Play, Previous, Refresh , Next, Up, Down} from "grommet-icons";

const LastLaunch = () => {

    const [markers, setMarkers] = React.useState([]);
    const [refresh, setRefresh] = React.useState(true);
    const [globe, setGlobe] = React.useState();
    const [isPaused, setIsPaused]= React.useState(false);
    const [show, setShow] = React.useState(true)

    
    const options = {
        globeGlowColor: "#292929",
        enableGlobeGlow: false,
        markerTooltipRenderer: marker => `${marker.name}`,
      };

    React.useEffect(() => {
        if (refresh === true){
            fetch(starlink)
            .then((r) => r.text())
            .then(text  => {
                const lines = text.match(/(?:.+\n?)/g, '');
                var i,j,temparray,chunk = 3;
                const stringArray= []
                    for (i=0,j=lines.length; i<j; i+=chunk) {
                        temparray = lines.slice(i,i+chunk);
                        stringArray.push(temparray)                 
            }
            
            const marks= []
            stringArray.map((sat, i) => {
                console.log(i)
                const name = getSatelliteName(sat);
                const latLonObj = getLatLngObj(sat);
                
                marks.push({
                    id: i,
                    name: name,
                    city: 'Starlink',
                    color: "red",
                    value: 35,
                    coordinates: [latLonObj.lat, latLonObj.lng]
                })
                
                return 1
            })
            
            
            setMarkers(marks);
            
            globe && globe.updateMarkers(marks);
            globe && globe.updateMarkers(markers)
            })
            setRefresh(false)
        }

        
    }, [refresh, markers])

    return (
        <Box fill={show}>
            <Collapsible open={show} direction="vertical">
                <Card fill round="small" pad="medium" gap="medium" >
                    <Box  justify="between" direction="row">
                        <GradientText weight="bold" size="medium">Starlink Tracker</GradientText>
                        <Box gap="small" direction="row">
                            {/* {isPaused ? (
                                <ConcaveButton round pad="small"justify="center" align="center" onClick={() => {globe.unlock();setIsPaused(false)}}>
                                    <Play size="small" />
                                    
                                </ConcaveButton>
                            ): (
                                <ConcaveButton round pad="small"justify="center" align="center" onClick={() => {globe.lock();setIsPaused(true)}}>
                                    <Pause size="small" />
                                
                                </ConcaveButton>
                            )} */}
                            
                            <ConcaveButton round pad="small"justify="center" align="center" onClick={() => setShow(false)}>
                                <Down size="small" />
                                
                            </ConcaveButton>
                        </Box>
                        
                    </Box>
                    
                    <ReactGlobe onGetGlobe={setGlobe} height="80%" markers={markers} options={options} globeBackgroundTexture={null}/>
                </Card>
            
            </Collapsible>
            <Collapsible open={!show} direction="vertical">
                <Card round="small" pad="medium" gap="medium" >
                    <Box  justify="end" direction="row">
                        <ConcaveButton round pad="small"justify="center" align="center" onClick={() => setShow(true)}>
                            <Up size="small" />                      
                        </ConcaveButton>               
                    </Box>      
                </Card>
            
            </Collapsible>
            </Box>
    )
}

export default LastLaunch;