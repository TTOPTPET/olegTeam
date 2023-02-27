import React from 'react';
import { Link } from "react-scroll";
import { Box, useMediaQuery } from '@chakra-ui/react';

import BurgerPopup from '../burgerPopup/BurgerPopup';

import './tabs.sass'

export default function Tabs({data, tabsClassName}) {

    const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)')
    const [isLargerThan1920] = useMediaQuery('(min-width: 1920px)')

    const tabItems = data.map((item, i) => {
        const {title, name} = item

        return (
            <Link className="tabs_item" activeClass='tabs_item tabs_item__active' key={i} smooth={true} spy={true} to={name} duration={1000} offset={isLargerThan1920 ? name === "about" ? -80 : 50 : name === "about" ? -80 : 20}>{title}</Link>
        )
    });

    const burgerItems = data.map((item, i) => {
        const {title, name} = item
        return (
            <Link className="burger_item" key={i} smooth={true} spy={true} to={name} duration={1000} offset={70}>{title}</Link>
        )
    });

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