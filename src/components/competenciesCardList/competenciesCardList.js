import React from 'react'
import CompetenciesCardItem from '../competenciesCardItem/CompetenciesCardItem'

import { Box, Grid, Image } from '@chakra-ui/react';

import cylinder from "../../images/Cylinder.png"
import cube from "../../images/Cube.png"
import torus from "../../images/Torus.png"

export default function CompetenciesCardList({data}) {

    const elements = data.map((item, i) => {
        const {...itemProps} = item;
        return (
            <CompetenciesCardItem 
                key={i} 
                {...itemProps}/>
        );
    })

    return (
        <Box pos="relative"> 
            <Grid justifyContent="center" templateColumns='repeat(2, 500px)' gap="36px"  mt="85px">
                {elements}
            </Grid>
            <Image src={cylinder} alt="cylinder" pos="absolute" left="-290px" top="0"></Image> 
            <Image src={torus} alt="torus" pos="absolute" left="260px" top="540px"></Image> 
            <Image src={cube} alt="cube" pos="absolute" right="-190px" bottom="-130px"></Image> 
        </Box>
    )
}
