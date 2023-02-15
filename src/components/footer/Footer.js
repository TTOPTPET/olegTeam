import React from 'react'

import { Box, Link } from '@chakra-ui/react'

export default function Footer() {
  return (
    <Box p="125px 0 60px">
        <Box fontFamily="Steppe SemiBold" fontSize="32px" lineHeight="32px" letterSpacing="0.01em" color="#F7FAFC" textAlign="center">OLEG Team, 2023</Box>
        <Link display="block" mt="30px" fontFamily="Roboto Mono" fontSize="24px" lineHeight="24px" textAlign="center" letterSpacing="0.01em" color="#3182CE" textDecor="underline">mail@olegteam.ru</Link>
    </Box>
  )
}
