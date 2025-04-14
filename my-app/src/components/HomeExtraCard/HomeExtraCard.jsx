import React from 'react';
import './HomeExtraCard.css';

export default function HomeExtraCard(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return(
        <>
            <div className="extraCardContainer" style={backgroundStyle}>
                <div className="extraCardTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="extraCardButtons">
                    <button className="shopNowButton">Shop Now</button>
                </div>
            </div>
        </>
    );
}