import React from 'react'
import CardItem from '../cardItem/CardItem'

import './cardList.sass'

export default function CardList({data}) {

    const elements = data.map((item, i) => {
        const {...itemProps} = item;
        return (
            <CardItem 
                key={i} 
                {...itemProps}/>
        );
    })

    return (
        <div className="cardList">
            {elements}
        </div>
    )
}
