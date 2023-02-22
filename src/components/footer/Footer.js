import React from 'react'

import { Box, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box p={{xl: "115px 0 60px", lg: '90px 0 40px', md: '60px 0 30px', sm: '30px 0 20px'}}>
        <Box fontFamily="Steppe SemiBold" fontSize={{xl: "32px", lg: '24px', md: '24px', sm: '24px'}} lineHeight="100%" letterSpacing="0.01em" color="#F7FAFC" textAlign="center">OLEG Team, 2023</Box>
        <Link display="block" mt={{xl: "30px", lg: '20px', md: '15px', sm: '10px'}} fontFamily="Roboto Mono" fontSize={{xl: "24px", lg: '20px', md: '18px', sm: '16px'}} lineHeight="100%" textAlign="center" letterSpacing="0.01em" color="#3182CE" textDecor="underline">mail@olegteam.ru</Link>
    </Box>
  )
}
