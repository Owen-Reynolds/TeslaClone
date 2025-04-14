import React from 'react';
import './Home.css';

import  Header  from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import HomeCarCard from '../../components/HomeCarCard/HomeCarCard.jsx';
import HomeCyberCard from '../../components/HomeCyberCard/HomeCyberCard.jsx';
import HomeFutureCard from '../../components/HomeFutureCard/HomeFutureCard.jsx';
import HomeSolarCard from '../../components/HomeSolarCard/HomeSolarCard.jsx';

import ModelS from '../../assets/modelS.jpg';
import Model3 from '../../assets/model3.jpg';
import ModelX from '../../assets/modelX.jpg';
import ModelY from '../../assets/modelY.jpg';
import Cybertruck from '../../assets/cybertruck.jpg';
import Cybercab from '../../assets/cybercab.jpg';
import Robovan from '../../assets/robovan.png';
import Solarpanel from '../../assets/solarpanel.jpg';
import HomeExtraCard from '../../components/HomeExtraCard/HomeExtraCard.jsx';
import Extra from '../../assets/extra.jpg';

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
                <HomeCyberCard title="Cybertruck" price="$11,111" picture={Cybertruck} />
            </div>
            <div className="homeFutureSection">
                <HomeFutureCard title="Cybercab" picture={Cybercab} />   
                <HomeFutureCard title="Robovan" picture={Robovan} />
            </div>
            <div className="homeSolarSection">
                <HomeSolarCard title="Solar Panels" subtitle="Produce Clean Energy From Your Roof" picture={Solarpanel}/>
            </div>
            <div className="extraSection">
                <HomeExtraCard title="Accessories" picture={Extra} />
            </div>
            <Footer />
        </>
    );
}