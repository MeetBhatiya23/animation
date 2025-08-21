import React from "react";
import "./dental.css";
import DentalHeroSection from "./DentalHeroSection";

const Dental = () => {
    const userData = [
        "MEET",
        "BHATIYA",
        "DESIGNER &",
        "MERN STECK",
        "DEVELOPER",
    ];
    const commonData = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa ea, ullam voluptatum error similique natus deleniti expedita. Eveniet voluptas nemo recusandae consequatur excepturi quisquam nihil quod inventore praesentium dolorum!",
    ];

    return (
        <div className="body-dental">
            <div className="mainsection">
                <DentalHeroSection />
                {userData.map((curElem, i) => (
                    <h1
                        style={{
                            ...(i === 0 && { marginLeft: "150px" }),
                            ...(i === 1 && { marginLeft: "250px" }),
                            ...(i === 2 && { marginLeft: "150px" }),
                            ...(i === 3 && {
                                marginLeft: "300px",
                                textAlign: "center",
                            }),
                        }}
                        className="userData autoBlur"
                    >
                        {curElem}
                    </h1>
                ))}
            </div>
            <hr />
            <div className="mainsection">
                <div className="common_data">
                    {[...Array(3)]
                        .flatMap(() => commonData)
                        .map((data, i) => (
                            <div className="autoShow">
                                {i === 2 && (
                                    <img
                                        style={{
                                            ...(i === 2 && {
                                                marginTop: "150px",
                                            }),
                                        }}
                                        src="/dental-images/8.png"
                                        alt=""
                                    />
                                )}
                                <p
                                    key={i}
                                    style={{
                                        ...(i === 1 && { marginTop: "150px" }),
                                    }}
                                >
                                    {data}
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Dental;
