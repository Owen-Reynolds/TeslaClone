import React from 'react';
import './HomeCarCard.css';

export default function HomeCarCard(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return(
        <>
            <div className="carCardContainer" style={backgroundStyle}>
                <div className="carCardTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="carCardPrice">
                    <h3>{props.price}</h3>
                </div>
            </div>
        </>
    );
}
