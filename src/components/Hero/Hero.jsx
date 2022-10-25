import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroButton } from "./HeroElements";

const Hero = () => {
    const [isOpen, setIsOPen] = useState(false);

    const toggle = () => {
        setIsOPen(!isOpen);
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Greatest Pizza Ever</HeroH1>
                    <HeroP>Ready in 6 seconds</HeroP>
                    <HeroButton>Place Order</HeroButton>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    );
}

export default Hero;