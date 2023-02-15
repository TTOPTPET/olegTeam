import React from 'react'
import { Box } from '@chakra-ui/react'

export default function AboutContent({data}) {
    return (
        <Box color="#fff" mt="90px" fontSize="40px" fontFamily="Steppe Regular" letterSpacing="0.01em">
            {data}
        </Box>
    )
}
