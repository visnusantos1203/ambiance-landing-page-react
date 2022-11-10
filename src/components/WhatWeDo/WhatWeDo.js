import React from "react";
import { useState } from "react";
import background1 from "../../assets/wwd-bg.png";
import background2 from "../../assets/wwd-bg-2.png";
import background3 from "../../assets/wwd-bg-3.png";
// Material UI
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
// Bootstrap
import Carousel from "react-bootstrap/Carousel"

const WhatWeDo = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <section
            id="what-we-do"
            style={{
                marginTop: "5vh",
                height: "95vh",
                textAlign: "center"
            }}
        >
            <div className="d-flex flex-column m-auto justify-content-evenly p-2 h-100">
                <h1 
                    style={{
                        fontSize: "2.5rem", 
                        fontFamily: "Alice, regular"
                    }}
                > What We Do</h1>
                <h6
                style={{
                    lineHeight: "1.6", 
                    padding: "1.1rem",
                    fontFamily: "Corbel, regular"
                }}
                >
                    We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.
                </h6>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img 
                            alt="Space Planning"
                            src={background1} 
                            style={{height: "inherit", maxHeight: "510px", maxWidth: "391px", margin: "0 auto"}}
                        />
                        <Carousel.Caption>
                            <h2 style={{ fontFamily: "Alice, serif"}}>Space Planning</h2>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            alt="Space Planning"
                            src={background2} 
                            style={{height: "inherit", maxHeight: "510px", maxWidth: "391px", margin: "0 auto"}}
                        />

                        <Carousel.Caption>
                        <h3>Layouting</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                            alt="Space Planning"
                            src={background3} 
                            style={{height: "inherit", maxHeight: "510px", maxWidth: "391px", margin: "0 auto"}}
                        />

                        <Carousel.Caption>
                        <h3>Built-In/Custom Furnitures</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1 style={{ fontFamily: "Alice, serif"}}> Space Planning</h1>
                <div className="d-flex justify-content-around w-50 mx-auto">
                    <WestIcon fontSize="large" />
                    <EastIcon fontSize="large" />
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;