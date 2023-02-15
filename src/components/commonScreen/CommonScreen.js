import React from 'react'
import { Box } from '@chakra-ui/react'

export default function CommonScreen(props) {  
  return (
    <Box  minH="100vh" w='1024px' m="0 auto" pt="150px" pl="66px" pr="66px" pb="51px" name={props.name}>
      <Box lineHeight="72px" fontWeight="700" fontSize="72px" color="#F7FAFC" textAlign="center">{props.title}</Box>
      {props.children}
    </Box>
  )
}
