import React from 'react'
import { Box } from '@chakra-ui/react'

export default function CommonScreen(props) {  
  return (
    <Box w={{xl: "768px", lg: '640px', md: '320px', sm: '300px'}} m="0 auto" pt={{xl: "170px", lg: '120px', md: '110px', sm: '110px'}} name={props.name}>
      <Box lineHeight="100%" fontWeight="700" fontSize={{xl: "54px", lg: '44px', md: '30px', sm: '30px'}} color="#F7FAFC" textAlign="center" mb={{xl: "80px", lg: '60px', md: '46px', sm: '46px'}}>{props.title}</Box>
      {props.children}
    </Box>
  )
}
