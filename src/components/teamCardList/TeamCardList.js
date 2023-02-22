import React from 'react'

import { Box } from '@chakra-ui/react'

import TeamCardItem from '../teamCardItem/TeamCardItem';

export default function TeamCardList({managers, programmers}) {

    const managersData = managers.map((item, i) => {
        const {...itemProps} = item;
        return (
            <TeamCardItem 
                key={i} 
                {...itemProps}/>
        );
    })
    const programmersData = programmers.map((item, i) => {
        const {...itemProps} = item;
        return (
            <TeamCardItem 
                key={i} 
                {...itemProps}/>
        );
    })

    return (
        <>
            <Box fontFamily="Steppe Black" color="#F7FAFC" textAlign="center" fontSize={{xl: "42px", lg: '40px', md: '24px', sm: '22px'}} mb={{xl: "0px", lg: '36px', md: '10px', sm: '8px'}} lineHeight="100%" >Проект-менеджеры</Box>
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                {managersData}
            </Box>
            <Box fontFamily="Steppe Black" color="#F7FAFC" textAlign="center" fontSize={{xl: "42px", lg: '40px', md: '24px', sm: '22px'}} lineHeight="100%" mt={{xl: "80px", lg: '58px', md: '21px', sm: '25px'}} mb={{xl: "0px", lg: '36px', md: '10px', sm: '8px'}}>Разработчики</Box>
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
                {programmersData}
            </Box>
        </>
    )
}
