import React from "react";
import './soda.css'
const Soda = () => {
    return (
        <div className="body-soda">
            <header class="header">
                <div class="main">
                    <h1>CSS ONLY</h1>
                    <img src="/images/2.png" alt="" />
                </div>
                <div class="title">
                    <h1>Meet Bhatiya</h1>
                    <img src="/images/code.png" alt="" />
                    <p>MERN Developer</p>
                </div>
            </header>
            <div class="soda_banner">
                <div class="product">
                    <div
                        className="soda"
                        style={{ "--url": "url(/images/bg.png)" }}
                    ></div>
                    <div
                        className="soda"
                        style={{ "--url": "url(/images/bg2.png)" }}
                    ></div>
                </div>
                <div class="rock">
                    <img src="/images/rock1.png" alt="" />
                    <img src="/images/rock2.png" alt="" />
                    <img src="/images/rock3.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Soda;
