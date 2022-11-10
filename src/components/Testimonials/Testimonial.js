import React from "react";
// MaterialUI
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
// Assets
import background from "../../assets/honey-comb-bg.png"
import rightQuoteImg from "../../assets/right-quote.png"

const Testimonial = () => {
    
    return(
        <section
            id="testimonial"
            className="text-center"
            style={{
                height: "50vh",
                background: `transparent url(${background}) padding-box`,
                border: "1px solid red"
            }}
        >
            <div className="container h-100 d-flex flex-column justify-content-evenly p-5">
                <img
                    alt="right-quote-img"
                    src={rightQuoteImg}
                    className="mx-auto"
                    style={{
                        height: "70px"
                    }}
                />
                <h5 style={{
                    lineHeight: "1.6"
                }}>
                    It is very satisfying when a decision we make turns out 
                    to have been the best one.
                </h5>
                <h4>
                    Jane Doe
                </h4>
                <div className="d-flex justify-content-around w-50 mx-auto">
                    <WestIcon fontSize="large" />
                    <EastIcon fontSize="large" />
                </div>
            </div>
        </section>
    );
};

export default Testimonial;