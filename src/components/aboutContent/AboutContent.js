import React from 'react'
import { Box } from '@chakra-ui/react'

export default function AboutContent({data}) {
    return (
        <Box color="#fff" fontSize={{xl: "32px", lg: '26px', md: '18px', sm: '16px'}} lineHeight={{xl: "38px", lg: '31px', md: '22px', sm: '19px'}} fontFamily="Steppe Regular" letterSpacing="0.01em" textAlign="justify">
            {data}
        </Box>
    )
}
