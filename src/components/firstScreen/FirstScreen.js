import React from 'react'
import { Box, Image, useMediaQuery } from '@chakra-ui/react'

import { Link } from "react-scroll";

import './firstScreen.sass'

import firstScreenImage from '../../images/first.png';
import bag from '../../images/bag.png'


export default function FirstScreen(props) {
    
    const {tabsClassName, feedBackVisible, name} = props;

    const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)')

    const [isLargerThan430] = useMediaQuery('(min-width: 430px)')

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
        <Box bgSize="unset" bgPosition="center" bgRepeat="no-repeat" h="100vh" w='100%' pt={{xl: "66px", lg: '66px', md: '25px', sm: '30px'}} pos="relative" name="firstScreen">
            <Box display="flex" w={{md: '100%', sm: '280px'}} m={{sm: (isLargerThan430 ? null : "0 auto") }}>
                <Box ml={{xl: "91px", lg: '72px', md: '104px', sm: (isLargerThan430 ? '72px' : null) }} display="block" w={{xl: "350px", lg: '210px', md: '140px', sm: '140px'}} >
                    <Box fontSize={{xl: "100px", lg: '60px', md: '40px', sm: '40px'}} color="#2B6CB0" textTransform="uppercase" fontWeight="800" lineHeight="100%">oleg</Box>
                    <Box color="#fff" fontSize={{xl: "60px", lg: '36px', md: '25px', sm: '25px'}} lineHeight="100%" fontFamily="Steppe ExtraBold" textAlign="right">team</Box>
                </Box>
            </Box>

            <Box w={{xl: "1600px", lg: '900px', md: '560px', sm: '280px'}} m="0 auto" mt={{xl: "100px", lg: "0", md: '0', sm: null}} bg="#2D3748" boxShadow="0px 25px 50px -12px rgba(0, 0, 0, 0.25)" borderRadius="5px" h={{xl: "350px", lg: '230px', md: '380px', sm: '290px'}} pt={{xl: "25px", lg: '25px', md: '67px', sm: '21px'}} pos={{xl: "relative", lg: "absolute", md: "absolute", sm: "absolute"}} top={{xl: 0, lg: "50%", md: "50%", sm: "50%"}} left={{xl: 0, lg: "50%", md: "50%", sm: "50%"}} transform={{xl:"translate(0, 0)" , lg: "translate(-50%, -50%)", md:"translate(-50%, -50%)" , sm: "translate(-50%, -50%)"}}>
                <Box fontSize={{xl: "150px", lg: '90px', md: '80px', sm: '40px'}} color="#fff" lineHeight="100%" fontWeight="900" pos="absolute" left={{xl: "-40px", lg: '-20px', md: '-20px', sm: '-10px'}} zIndex="5">ДЕЛАЕМ ИНТЕРНЕТ</Box>
                <Image src={firstScreenImage} alt="image" pos="absolute" right={{xl: "-70px", lg: '-50px', md: '-60px', sm: '-10px'}} bottom={{xl: "-175px", lg: '-200px', md: '-180px', sm: '-45px'}} w={{xl: "515px", lg: '385px', md: '385px', sm: '230px'}}></Image> 
                <Box fontFamily="Steppe Bold" w={{xl: "100%", lg: '100%', md: '270px', sm: '270px'}} fontSize={{xl: "40px", lg: '30px', md: '24px', sm: '22px'}} color="#fff" letterSpacing="0.01em" pos="absolute" left={{xl: "-40px", lg: '-20px', md: '17px', sm: '5px'}} bottom={{xl: "-80px", lg: '-60px', md: '60px', sm: '110px'}}>ХОРОШАЯ РАБОТА, ОЛЕГ</Box>
            </Box>
                
 
            <Link className={buttonClassName()} to={name} smooth={true} spy={true} duration={1000}>{isLargerThan1920 ? 'Заказать проект' : <Image src={bag} alt="buy button" w={{lg: '56px', md: '56px', sm: '48px'}}></Image>}</Link>
        </Box>
        </>
    )
}
