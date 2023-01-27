import React from 'react'
import { Box } from '@chakra-ui/react'

import "./firstScreen.sass"

import mainBg from '../../images/mainbg.png'

export default function FirstScreen() {

    return (
        <>
        <Box bgImage={mainBg} bgSize="unset" bgPosition="center" h="100vh" w='100%' pt="36px" pl="42px">
            <div className="logo_title">oleg</div>
            <div className="logo_subtitle">team</div>
        </Box>
        </>
    )
}
