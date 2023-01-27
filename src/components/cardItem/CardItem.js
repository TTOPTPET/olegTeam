import React from 'react'
import { Box } from '@chakra-ui/react'

import card from "../../images/card.png"

import './cardItem.sass'

export default function CardItem(props) {

    const {title, descr, tech, link, adress} = props;

    return (
        <Box bgImage={card} bgSize="inherit" bgPosition="center" width="560px" height="340px" border="4px solid #FFFFFF" p="42px 31px 10px 31px" mt="20px" ml="15px" mr="15px">
            <div className="cardItem_title">{title}</div>
            <div className="cardItem_descr">{descr}</div>
            {tech ? <div className="cardItem_tech">{tech}</div> : <a href={adress} className="cardItem_link">{link}</a>}
        </Box>    
    )
}
