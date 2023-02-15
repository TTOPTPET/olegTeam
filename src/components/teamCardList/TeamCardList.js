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
            <Box fontFamily="Steppe Black" color="#F7FAFC" textAlign="center" fontSize="56px" lineHeight="56px" mt="85px">Проект-менеджеры</Box>
            <Box display="flex" justifyContent="space-evenly" mt="45px">
                {managersData}
            </Box>
            <Box fontFamily="Steppe Black" color="#F7FAFC" textAlign="center" fontSize="56px" lineHeight="56px" mt="45px">Разработчики</Box>
            <Box display="flex" justifyContent="space-evenly" flexWrap="wrap" mt="45px">
                {programmersData}
            </Box>
        </>
    )
}
