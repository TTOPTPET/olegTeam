import React, {useState, useEffect} from 'react'
import { Box, Image } from '@chakra-ui/react'
import { Link } from "react-scroll";

import burger from "../../images/burger.svg"
import close from '../../images/cancel.svg'

export default function BurgerPopup(props) {

    const [active, setActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function() {
            if (active && window.scrollY > -1) {
                setActive(false)
            }
        });
    }, [active])
    

    return (
        <>
            <Box bg="gray.700" w={{md: "80px", sm: "62px"}} h={{md: "80px", sm: "62px"}} pos="fixed" top={{md: "15px", sm: "27px"}} right="0px" display="flex" zIndex="15" cursor="pointer" onClick={() => setActive(true)}>
                <Image src={burger} alt="burger lines" w={{md: "40px", sm: "30px"}} m="0 auto" alignItems="center"></Image>    
            </Box>
            <Box visibility={active ? null : 'hidden'} opacity={active ? '1' : '0'} transition="all .5s" pos="fixed" w="100%" h="100%" top="0" bg="rgba(0, 0, 0, 0.56)" mixBlendMode="normal" zIndex="19" onClick={() => setActive(false)}>
                <Box pos="fixed" transform={active ? "translateX(0px)" : "translateX(400px)"} visibility={active ? null : "hidden"} transition="all 0.5s ease" top={{md: "15px", sm: "27px"}} right="0px" bg="gray.700" w={{md: "320px", sm: "300px"}} h={{md: "420px", sm: "380px"}} p={{md: "60px 0 65px", sm: "45px 0"}} zIndex="20">
                    <Image src={close} alt="close button" pos="absolute" top="30px" right="30px" onClick={() => setActive(false)}></Image>
                    <Link smooth={true} spy={true} to="firstScreen" duration={1000}>
                        <Box w="119px" m="0 auto">
                            <Box fontWeight="700" fontSize="34px" lineHeight="100%" color="#2B6CB0" textTransform="uppercase">oleg</Box>
                            <Box textAlign="right" fontSize="20px" lineHeight="100%" color='#FFFFFF' letterSpacing="0.01em" fontFamily="Steppe ExtraBold">team</Box>
                        </Box>
                    </Link>
                    <Box mt="48px" display="flex" flexDir="column" rowGap="22px" alignItems="center">
                        {props.children}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
