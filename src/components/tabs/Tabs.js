import React from 'react';
import { Link } from "react-scroll";
import { Box, useMediaQuery } from '@chakra-ui/react';

import BurgerPopup from '../burgerPopup/BurgerPopup';

import './tabs.sass'

export default function Tabs({data, tabsClassName}) {
    const tabItems = data.map((item, i) => {
        const {title, name} = item
        return (
            <Link className="tabs_item" activeClass='tabs_item tabs_item__active' key={i} smooth={true} spy={true} to={name} duration={1000}>{title}</Link>
        )
    });

    const burgerItems = data.map((item, i) => {
        const {title, name} = item
        return (
            <Link className="burger_item" key={i} smooth={true} spy={true} to={name} duration={1000}>{title}</Link>
        )
    });

    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    
    return (
        <>
            {isLargerThan1024 ? 
            <Box className={tabsClassName}>
                {tabItems}
            </Box> : 
            <BurgerPopup>
                {burgerItems}
            </BurgerPopup>}
        </>
    )
}