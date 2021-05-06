import React from 'react'

export default function Wheather() {
    return (
        <div className="app">
            <div className="card">
                <h2 className="title">< i className="fa fa-cloud"></i>UR O SKUR</h2>
                <div className="search-form">
                    <input type="text" placeholder="Sök efter plats"/>
                    <button type="button">Sök</button>
                </div>     
            </div>
            <div className="main-container">
                <h4>Live väderprognos</h4>
                <div className="weather-icon">
                    <i className="fa fa-sun"></i>
                </div>
                <h3>Soligt</h3>
                <div className="temprature">
                    <h1>25 grader</h1>
                </div>
                <div className="location">
                    <h3><i className="fa fa-street-view"></i>Uppsala | Sweden</h3>
                </div>

            </div>
        </div>
    );
}
