import React from 'react'
import { GridItem, Box } from '@chakra-ui/react'


export default function CompetenciesCardItem(props) {

    const {title, descr, tech, zIndex } = props;

    return (
        <GridItem pos="relative"  bg="#2D3748" w={{xl: "374px", lg: '100%', md: '100%', sm: '100%'}} h={{xl: "540px", lg: '460px', md: '380px', sm: '380px'}} p={{xl: "80px 40px", lg: '80px 51px 77px', md: '43px 20px 41px', sm: '43px 25px 56px'}} zIndex={zIndex}>
            <Box h={{xl: "36px", lg: '40px', md: '24px', sm: '22px'}} fontFamily="Steppe Black" fontSize={{xl: "36px", lg: '40px', md: '24px', sm: '22px'}} letterSpacing="0.01em" color="#F7FAFC" lineHeight="100%" flexGrow="1" pos="relative" zIndex={10}>{title}</Box>
            <Box h={{xl: "116px", lg: '87px', md: '88px', sm: '76px'}} mt={{xl: "34px", lg: '40px', md: '21px', sm: '23px'}} fontFamily="Steppe Book" fontSize={{xl: "24px", lg: '24px', md: '18px', sm: '16px'}} lineHeight={{xl: "29px", lg: '29px', md: '22px', sm: '19px'}} color="#F7FAFC" flexGrow="1" w={{xl: "100%", lg: '430px', md: '100%', sm: '100%'}}>{descr}</Box>
            <Box mt={{xl: "34px", lg: '40px', md: '43px', sm: '55px'}} fontFamily="Roboto Mono" fontSize={{xl: "24px", lg: '24px', md: '18px', sm: '16px'}} lineHeight={{xl: "32px", lg: '32px', md: '24px', sm: '21px'}} letterSpacing="0.01em" color="#2B6CB0"  pos="relative" zIndex={10}>{tech}</Box>
        </GridItem>    
    )
}
