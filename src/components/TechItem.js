import React from 'react';

const TechItem = ({ item }) => (
    <div className={`${item.type} techGrid`}>
        <img src={item.img} alt={item.type} />
        <p>{item.text}</p>
    </div>
);

export default TechItem;