import React from "react"


import Card from "../../components/Card";
import GradientText from "../../components/GradientText";
import CardConcave from "../../components/CardConcave";

import {Box, Text} from "grommet"


const LastLaunch = () => {

    const [launches, setLaunches] = React.useState()

    React.useEffect(() => {
        fetch("https://ll.thespacedevs.com/2.0.0/launch/upcoming/?rocket__configuration__manufacturer__name__icontains=spacex")
        .then(res => res.json())
        .then(data => setLaunches(data))
    }, [])

    return (
        <Card round="small" pad="medium" gap="medium" width="medium">
            <GradientText weight="bold" size="medium">Next launches</GradientText>
            <Box gap="small">
                {launches && (
                    <CardConcave round="small" pad="small">
                        <Text>{launches.results && launches.results[0].name}</Text>
                    </CardConcave>
                )}
            </Box>
        </Card>
    )
}

export default LastLaunch;