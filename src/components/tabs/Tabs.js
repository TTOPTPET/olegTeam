import React from 'react';
import { Link } from "react-scroll";
import './tabs.sass'

export default function Tabs({data, tabsClassName}) {
    const tabItems = data.map((item, i) => {
        const {title, name} = item
        return (
            <Link className="tabs_item" activeClass='tabs_item tabs_item__active' key={i} smooth={true} spy={true} to={name} duration={1000} >{title}</Link>
        )
    });
    
    return (
        <div className={tabsClassName}>
            {tabItems}
        </div>
    )
}