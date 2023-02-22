import React from 'react'
import { Box, Avatar } from '@chakra-ui/react'

export default function TeamCardItem(props) {

  const {image, name} = props;

  return (
    <Box w={{xl: "230px", lg: '200px', md: '130px', sm: '130px'}} display="flex" flexDir="column" alignItems="center" mt={{xl: "40px", lg: '19px', md: '13px', sm: '14px'}}>
        <Avatar src={image} name={name} w={{xl: "150px", lg: '150px', md: '130px', sm: '130px'}} h={{xl: "150px", lg: '150px', md: '130px', sm: '130px'}}></Avatar> 
        <Box fontFamily="Steppe SemiBold" fontSize={{xl: "33px", lg: '30px', md: '18px', sm: '16px'}} lineHeight="100%" textAlign="center" letterSpacing="0.01em" color="#F7FAFC" mt={{xl: "40px", lg: '26px', md: '10px', sm: '10px'}}>{name}</Box>
    </Box>
  )
}
