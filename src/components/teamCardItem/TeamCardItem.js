import React from 'react'
import { Box, Avatar } from '@chakra-ui/react'

export default function TeamCardItem(props) {

  const {image, name} = props;

  return (
    <Box w="290px" h="324px" display="flex" flexDir="column" alignItems="center" mt="40px">
        <Avatar src={image} name={name} w="200px" h="200px"></Avatar> 
        <Box fontFamily="Steppe SemiBold" fontSize="44px" lineHeight="44px" textAlign="center" letterSpacing="0.01em" color="#F7FAFC">{name}</Box>
    </Box>
  )
}
