import React from 'react';
import './tabs.sass'

export default function Tabs({data, tabsClassName}) {
    console.log(data);
    const tabItems = data.map((item, i) => {
        const {name, active} = item
        // console.log("tab Active", item)
        const tabClassName = active ? ' tabs_item tabs_item__active' : 'tabs_item'
        return (
            <div className={tabClassName} key={i}>{name}</div>
        )
    });
    
    return (
        <div className={tabsClassName}>
            {tabItems}
        </div>
    )
}