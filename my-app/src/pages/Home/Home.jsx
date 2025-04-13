import React from 'react';
import './Home.css';

import  Header  from '../../components/Header/Header.jsx';

import HomeCarCard from '../../components/HomeCarCard/HomeCarCard.jsx';
import HomeCyberCard from '../../components/HomeCyberCard/HomeCyberCard.jsx';

import ModelS from '../../assets/modelS.jpg';
import Model3 from '../../assets/model3.jpg';
import ModelX from '../../assets/modelX.jpg';
import ModelY from '../../assets/modelY.jpg';
import cybertruck from '../../assets/cybertruck.jpg';

export default function Home() {    
    return(
        <>
            <Header />
            <div className="homeHeaderSection">
                <div className="homeButtonSection">
                    <button className="vehicleButton">Our Vehicles</button>
                    <button className="missionButton">Our Mission</button>
                </div>
            </div>
            <div className="homeCarSection">
                <HomeCarCard title="S" price="$79,990" picture={ModelS}/>
                <HomeCarCard title="3" price="$34,990" picture={Model3}/>
                <HomeCarCard title="X" price="$84,990" picture={ModelX}/>
                <HomeCarCard title="Y" price="$41,490" picture={ModelY}/>
            </div>
            <div className="homeCyberSection">
                <HomeCyberCard title="Cybertruck" price="$11,111" picture={cybertruck} />
            </div>
        </>
    );
}