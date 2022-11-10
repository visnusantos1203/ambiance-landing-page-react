import React from "react";
import background from "../../assets/honey-comb-bg.png";
const AboutUs = () => {

    return (
        <section 
            id="about-us" 
            className="text-center h-100 px-5"
            style={{
                height: "100vh",
                background: `transparent url(${background}) padding-box`
            }}
        >
            <h3
                style={{
                    padding: "2rem",
                    fontFamily: "serif",
                    lineHeight: "1.6"
                }}
            >
                We at Ambiance Interior Design have been passionate about creating spaces reflecting the individuality of our client. Imagination and knowledge are the core values that drive us. We strive to push our imagination for a fresh look injected with design savvy and an eye for detail in the modern and eclectic styles we predominantly design in.
            </h3>
        </section>
    );
};

export default AboutUs;