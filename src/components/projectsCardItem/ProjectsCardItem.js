import React from 'react'
import { Box, Link, Image } from '@chakra-ui/react'


export default function ProjectsCardsList(props) {

    const {title, descr, adress, link, image, left, right, bottom, side, width} = props;

    console.log(width[0]);

    return (
        <Box bg="#2D3748" mb="20px" _last={{ mb: 0 }} w="100%" h={{xl: "520px", lg: '500px', md: '420px', sm: '420px'}} p={{xl: "80px 84px 94px", lg: '80px 51px 112px', md: '43px 20px 156px', sm: '43px 25px 159px'}} display="flex" flexDir="column" pos="relative">
            <Box fontSize={{xl: "42px", lg: '40px', md: '24px', sm: '22px'}} color="#F7FAFC" lineHeight="100%" fontFamily="Steppe Black" textAlign={side ? 'right' : 'left'}>{title}</Box>
            <Box fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}} lineHeight={{xl: "36px", lg: '29px', md: '22px', sm: '19px'}} mt={{xl: "60px", lg: '60px', md: '21px', sm: '23px'}} color="#F7FAFC" fontFamily="Steppe Book" flex="1 0 auto" textAlign={side ? 'right' : 'left'} >{descr}</Box>
            <Link href={adress} fontSize={{xl: "30px", lg: '24px', md: '18px', sm: '16px'}} color="#2B6CB0" textDecor="underline" fontWeight="500" id="link" flex="0 0 auto" fontFamily="Roboto Mono" textAlign={side}>{link}</Link>
            <Image src={image} alt="image" pos="absolute" left={left ? {xl: left[0], lg: left[1], md: left[2], sm: left[3]} : null} right={right ? {xl: right[0], lg: right[1], md: right[2], sm: right[3]} : null} bottom={{xl: bottom[0], lg: bottom[1], md: bottom[2], sm: bottom[3]}} zIndex="5" w={{xl: width[0], lg: width[1], md: width[2], sm: width[3]}}></Image> 
        </Box>
    )
}
