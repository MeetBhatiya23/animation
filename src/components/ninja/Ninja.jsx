import React from "react";
import './ninja.css'

const Ninja = () => {
    return (
        <div className="body">
            <div className="ninja-banner">
                <div className="slider" style={{ "--quantity": 10 }}>
                    {[...Array(10)].map((_, index) => (
                        <div
                            className="item"
                            style={{ "--position": index + 1 }}
                            key={index}
                        >
                            <img
                                src={`/images/img-${index + 1}.png`}
                                alt={`Slide ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

                <div className="content">
                    <h1 data-content="CSS ONLY">CSS ONLY</h1>
                    <div className="author">
                        <h2>Meet Bhatiya</h2>
                        <p>Web Designer</p>
                        <div className="model"></div>
                    </div>
                </div>              

            </div>
        </div>
    );
};

export default Ninja;
