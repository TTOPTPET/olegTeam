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
            <Grid justifyContent="center" templateColumns={{xl: 'repeat(2, 374px)', lg: 'repeat(1, 100%)', md: 'repeat(1, 100%)', sm: 'repeat(1, 100%)'}} gap="20px">
                {elements}
            </Grid>
            <Image src={cylinder} alt="cylinder" pos="absolute" w={{xl: "390px", lg: '300px', md: '310px', sm: '240px'}} left={{xl: "-200px", lg: '-180px', md: '-130px', sm: '-90px'}} top="0"></Image> 
            <Image src={torus} alt="torus" pos="absolute" w={{xl: "390px", lg: '300px', md: '280px', sm: '230px'}} left={{xl: "200px", lg: '180px', md: '30px', sm: '40px'}} top={{xl: "390px", lg: '810px', md: '670px', sm: '680px'}}></Image> 
            <Image src={cube} alt="cube" pos="absolute" w={{xl: "300px", lg: '300px', md: '240px', sm: '210px'}} right={{xl: "-130px", lg: '-60px', md: '-70px', sm: '-15px'}} bottom={{xl: "-140px", lg: '-80px', md: '-70px', sm: '-50px'}}></Image> 
        </Box>
    )
}
