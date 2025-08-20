import React from "react";
import "./dental.css";
const DentalHeroSection = () => {
    const introduceData = [
        {
            data: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui, ducimus molestiae accusamus quodsuscipit impedit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis earum quaerat similique, facilis, nemo commodi doloremque ab voluptates officiis quoveniam nihil qui, ducimus molestiae accusamus quod suscipit impedit?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui, ducimus molestiae accusamus quodsuscipit impedit?Lorem ipsum, dolor sit amet consectetur adipisicingelit. Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui, ducimus molestiae accusamus quodsuscipit impedit?",
        },
        {
            images: "public/dental-images/6.png",
            data: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui,rat similique, facilis, nemo commodi doloremque ab voluptates officiis quoveniam nihil qui, ducimus mo",
        },
        {
            images: "public/dental-images/2.png",
            data: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio blanditiis earum quaerat similique, facilis,nemo commodi doloremque ab voluptates officiis quoveniam nihil qui,impedit?Lorem ipsum, dolor sit amet consectetur adipisicingelit. ",
        },
        {
            images: "public/dental-images/candy.png",
        },
    ];
    return (
        <div className="herosection">
            <div className="top-section">
                <div className="left-section">
                    <img src="/public/dental-images/5.png" alt="" />
                    <h1 data-content="CSS ONLY">CSS ONLY</h1>
                </div>
                <div className="right-section">
                    <img src="/public/dental-images/6.png" alt="" />
                    <h2>Meet Bhatiya</h2>
                    <p>FullStack Developer</p>
                </div>
            </div>
            <div className="mouth-hero">
                <img
                    className="bg-images"
                    src="/public/dental-images/banner.png"
                    alt=""
                />
                <img
                    className="mouth"
                    src="/public/dental-images/mouth.png"
                    alt=""
                />
            </div>
            <div className="scroller">
                <img src="/public/dental-images/sich.png" alt="" />
                <img
                    src="/public/dental-images/3.png"
                    alt=""
                    className="autorotate"
                />
            </div>
            <div className="introduce">
                <h1 className="autoShow">Introduce</h1>
                <div
                    style={{
                        marginTop: "200px",
                    }}
                >
                    {introduceData.map((curElem, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection:
                                    index % 2 === 1 ? "row" : "row-reverse",
                                alignItems: "center",
                                marginTop: "-20px",
                            }}
                        >
                            <div className="introduce-data autoShow">
                                <img
                                    src={curElem.images}
                                    alt=""
                                    style={{
                                        width: "600px",
                                    }}
                                />
                                <p style={{ maxWidth: "700px" }}>
                                    {curElem.data}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DentalHeroSection;
