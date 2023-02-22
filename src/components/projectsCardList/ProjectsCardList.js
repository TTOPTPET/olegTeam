import React from 'react'
import ProjectsCardItem from '../projectsCardItem/ProjectsCardItem';
import { Box } from '@chakra-ui/react'

export default function ProjectsCardList({data}) {

    const elements = data.map((item, i) => {
        const {...itemProps} = item;
        return (
            <ProjectsCardItem 
                key={i} 
                {...itemProps}/>
        );
    })

    return (
        <Box display="flex" flexDir="column" justifyContent="center" alignItems="center">
            {elements}
        </Box>
    )
}
