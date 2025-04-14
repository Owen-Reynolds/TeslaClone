import React from 'react';
import './HomeSolarCard.css';

export default function HomeSolarCard(props){
    const backgroundStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return(
        <>
            <div className="solarCardContainer" style={backgroundStyle}>
                <div className="solarCardTitle">
                    <h2>{props.title}</h2>
                    <h4>{props.subtitle}</h4>
                </div>
                <div className="solarCardButtons">
                    <button className="orderNowButton">Order Now</button>
                    <button className="learnMoreButton">Learn More</button>
                </div>
            </div>      
        </>
    );
}