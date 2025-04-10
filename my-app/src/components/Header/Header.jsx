import React from 'react';
import './Header.css';

export default function Header() {
    return(
        <>
            <div className="headerContainer">
                <div className="headerContent">
                    <div className="leftHeaderSection">
                        <img src="" alt="" />
                    </div>
                    <div className="middleHeaderSection">
                        <h2>Vehicles</h2>
                        <h2>Energy</h2>
                        <h2>Charging</h2>
                        <h2>Discover</h2>
                        <h2>Shop</h2>
                    </div>
                    <div className="rightHeaderSection">
                        <i class="fa-solid fa-question"></i>
                        <i class="fa-solid fa-globe"></i>
                        <i class="fa-solid fa-person"></i>
                    </div>
                </div>
            </div>
        </>
    );
}
