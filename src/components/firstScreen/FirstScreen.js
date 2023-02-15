import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import { Link } from "react-scroll";

import './firstScreen.sass'

import firstScreenImage from '../../images/first.png';

export default function FirstScreen(props) {
    
    const {tabsClassName, feedBackVisible, name} = props;

    const buttonClassName = () => {
        if (tabsClassName === "tabs") {
            return 'order_button order_button__hidden'
        } else if (tabsClassName === "tabs__active" && !feedBackVisible) {
            return 'order_button' 
        } else {
            return 'order_button order_button__hidden'
        }
    }

    return (
        <>
        <Box  bgSize="unset" bgPosition="center" bgRepeat="no-repeat" h="100vh" w='100%' pt="65px" pl="90px" pr="42px">
            <Box display="block" w="350px">
                <Box fontSize="100px" color="#2B6CB0" textTransform="uppercase" fontWeight="800" lineHeight="72px">oleg</Box>
                <Box color="#fff" fontSize="60px" lineHeight="44px" fontFamily="Steppe ExtraBold" textAlign="right">team</Box>
            </Box>
            <Box w="90%" m="0 auto" mt="70px" pos="relative">
                <Box bg="#2D3748" boxShadow="0px 25px 50px -12px rgba(0, 0, 0, 0.25)" borderRadius="5px" h="350px" p="25px" pos="relative">
                    <Box fontSize="150px" color="#fff" lineHeight="150px" fontWeight="900" pos="absolute" left="-60px">ДЕЛАЕМ ИНТЕРНЕТ</Box>
                    <Image src={firstScreenImage} alt="image" pos="absolute" right="-70px" top="0"></Image> 
                </Box>
                <Box fontFamily="Steppe Bold" fontSize="40px" color="#fff" letterSpacing="0.01em" mt="30px" pos="absolute" left="-60px">ХОРОШАЯ РАБОТА, ОЛЕГ</Box>
            </Box>
 
            <Link className={buttonClassName()} to={name} smooth={true} spy={true} duration={1000} >Заказать проект</Link>
        </Box>
        </>
    )
}
