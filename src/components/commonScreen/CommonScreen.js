import React from 'react'
import { Box } from '@chakra-ui/react'
import './commonScreen.sass'

export default function CommonScreen(props) {  
  return (
    <Box bg="#EDF2F7" minH="100vh" w='100%' pt="100px" pl="66px" pr="66px" pb="51px" name={props.name}>
      <div className="commonScreen_title">{props.title}</div>
      {props.children}
    </Box>
  )
}
