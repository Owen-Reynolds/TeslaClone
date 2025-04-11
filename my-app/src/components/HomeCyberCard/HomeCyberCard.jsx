import React from 'react';
import './HomeCyberCard.css';

export default function HomeCyberCard(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return(
        <>
            <div className="cyberCardContainer" style={backgroundStyle}>
                <div className="cyberCardTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="cyberCardPrice">
                    <h3>Starting At</h3>
                    <h3>{props.price}</h3>
                </div>
            </div>
        </>
    );
}