import React from "react";
// Bootstrap
import Button from "react-bootstrap/Button";
// Assets
import careersImg from "../../assets/careers.png"

const Careers = () => {

    return (
        <section
            id="careers"
            style={{
                height: "100vh",
                border: "1px solid red"
            }}
        >
            <img
                alt="project png"
                src={careersImg}
                className="w-100 p-4"
            />

            <div className="container h-50 d-flex flex-column justify-content-evenly px-5">
                <h1 style={{fontSize: "3.5rem", fontFamily: "Alice, regular"}}>
                    Be Part Of Our Team
                </h1>
                <span style={{fontSize: "1rem", fontFamily: "inherit", letterSpacing: "0.4px"}}>
                    We're what we do. We are a passionately driven team, 
                    specializing in residential interiors for both private and 
                    commercial clients throughout the world.
                </span>
                <Button
                    variant="outline-warning" 
                    size="md"
                    className="mx-auto w-50 p-2"
                    style={{fontColor: "white"}}
                    href="#projects"
                >
                    LEARN MORE
                </Button>
            </div>

        </section>
    );
};

export default Careers;