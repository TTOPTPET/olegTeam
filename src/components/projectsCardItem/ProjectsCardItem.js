import React, {useState} from 'react'
import { Box, Link, Image } from '@chakra-ui/react'


export default function ProjectsCardsList(props) {

    const {title, descr, adress, link, image, left, right, bottom, side} = props;

    return (
        <Box bg="#2D3748" mt="36px" w="1024px" h="768px" p="126px 100px 131px" display="flex" flexDir="column" pos="relative">
            <Box fontSize="56px" color="#fff" lineHeight="56px" fontFamily="Steppe Bold" textAlign={side}>{title}</Box>
            <Box fontSize="40px" lineHeight="48px" mt="82px" color="#F7FAFC" fontFamily="Steppe Book" flex="1 0 auto" w="700px" textAlign={side} ml={side === "right" ? "auto" : null}>{descr}</Box>
            <Link href={adress} fontSize="40px"  color="#2B6CB0" textDecor="underline" fontWeight="500" id="link" flex="0 0 auto" fontFamily="Roboto Mono" textAlign={side}>{link}</Link>
            <Image src={image} alt="image" pos="absolute" left={left} right={right} bottom={bottom} zIndex="5"></Image> 
        </Box>
    )
}
