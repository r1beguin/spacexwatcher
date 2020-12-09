import React from "react"

import Card from "../../components/Card";
import GradientText from "../../components/GradientText";
import ConcaveButton from "../../components/ConcaveButton";

import ReactGlobe from 'react-globe';

import starlink from "./starlink.txt";

import { getLatLngObj, getSatelliteName } from "tle.js";
import {  Box } from "grommet";
import { Refresh } from "grommet-icons";

const LastLaunch = () => {

    const [markers, setMarkers] = React.useState();
    const [refresh, setRefresh] = React.useState(true);
    const [globe, setGlobe] = React.useState(null);

    const options = {
        globeGlowColor: "#292929",
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
            })
            setRefresh(false)
        }
        
    }, [refresh])

    return (
        
            <Card round="small" pad="medium" gap="medium" fill>
                <Box fill="horizontal" justify="between" direction="row">
                    <GradientText weight="bold" size="medium">Starlink Tracker</GradientText>
                    <ConcaveButton round pad="small"justify="center" align="center" onClick={() => setRefresh(true)}>
                        <Refresh size="small" />
                    </ConcaveButton>
                    
                </Box>
                
                <ReactGlobe onGetGlobe={setGlobe} height="80%" markers={markers} options={options} globeBackgroundTexture={null}/>
            </Card>
          
    )
}

export default LastLaunch;