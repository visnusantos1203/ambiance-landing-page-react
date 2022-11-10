import React from "react";
import Button from "react-bootstrap/Button";
import background from "../../assets/hero-bg.png"
const HeroBanner = () => {

    return(
        <section
            id="hero-banner"
            style={{
                height: "100vh",
                background: `transparent url(${background}) 72% 0% no-repeat padding-box`
            }}
        >
            <div
                className="d-flex flex-column justify-content-around align-items-start h-50 w-100 text-sm-center p-5"
            >
                <h1 style={{fontSize: "3.5rem", fontFamily:  "Alice, serif"}}>Simplified Complexity</h1>
                <h6 className="px-5 lh-base text-wrap">
                    A raw idea is complex but by having collaboration with us, the experts. it can be refined or simplified.
                </h6>
                <Button 
                    variant="outline-warning" 
                    size="md"
                    className="mx-auto w-50 p-2"
                    style={{fontColor: "white"}}
                    href="#about-us"
                >
                    ABOUT US
                </Button>
            </div>
        </section>
        
    );
};

export default HeroBanner;