import React from "react";
import LeftHeader from "./components/LeftHeader";
import RightHeader from "./components/RightHeader";
import { Container } from "./styles/HeaderStyles";

const Header = () => {
    return (
        <Container>
            <LeftHeader />
            
            <RightHeader />
        </Container>
    );
};

export default Header;
