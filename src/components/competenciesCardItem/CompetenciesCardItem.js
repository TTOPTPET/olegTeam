import React from 'react'
import { GridItem, Box } from '@chakra-ui/react'


export default function CompetenciesCardItem(props) {

    const {title, descr, tech, zIndex } = props;

    return (
        <GridItem  bg="#2D3748" w="494px" h="670px" p="62px 57px 60px" zIndex={zIndex}>
            <Box h="112px" fontFamily="Steppe Black" fontSize="56px" letterSpacing="0.01em" color="#F7FAFC" lineHeight="56px" flexGrow="1" pos="relative" zIndex={10}>{title}</Box>
            <Box h="152px" mt="26px" fontFamily="Steppe Book" fontSize="32px" lineHeight="38px" color="#F7FAFC" flexGrow="1">{descr}</Box>
            <Box mt="48px" fontFamily="Roboto Mono" fontSize="32px" lineHeight="42px" letterSpacing="0.01em" color="#2B6CB0"  pos="relative" zIndex={10}>{tech}</Box>
        </GridItem>    
    )
}
