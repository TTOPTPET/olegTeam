import React from 'react';
import { Link } from "react-scroll";
import './tabs.sass'

export default function Tabs({data, tabsClassName}) {
    const tabItems = data.map((item, i) => {
        const {title, active, name} = item
        const tabClassName = active ? ' tabs_item tabs_item__active' : 'tabs_item'
        return (
            <Link className={tabClassName} key={i} smooth={true} spy={true} to={name} duration={900} offset={-70}>{title}</Link>
        )
    });
    
    return (
        <div className={tabsClassName}>
            {tabItems}
        </div>
    )
}