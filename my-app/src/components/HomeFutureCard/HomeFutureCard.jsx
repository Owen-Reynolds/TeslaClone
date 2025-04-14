import React from 'react';
import './HomeFutureCard.css';

export default function HomeFutureCard(props) {
    const backgroundStyle = {
        backgroundImage: `url(${props.picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return(
        <>
            <div className="futureCardContainer" style={backgroundStyle}>
                <div className="futureCardTitle">
                    <h2>{props.title}</h2>
                </div>
                <div className="futureCardButton">
                    <button className="learnMoreButton">Learn More</button>
                </div>
            </div>
        </>
    );
}

