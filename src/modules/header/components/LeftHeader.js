import React from "react";
import {
  Container,
  TopBoarder,
  TopContent,
  MainContent,
  BottomContent,
    Button,
  BottomBorder
} from "../styles/LeftHeaderStyles";

const LeftHeader = () => {
    return (
        <Container>
            <TopBoarder />

            <TopContent style={{marginTop: "2rem"}}>
                کابینت های نفیس
            </TopContent>

            <TopContent>
                ارائه شده در
            </TopContent>

            <MainContent>
                شاردیزاین
            </MainContent>

            <BottomContent style={{marginTop: "1rem"}} >
                کابینت های سفارشی ییشرفته
            </BottomContent>

            <BottomContent>
                قالب سازی، طراحی و نصب
            </BottomContent>

            <Button>
                ارتباط با ما
            </Button>

            <BottomBorder />
            
        </Container>
    );
};

export default LeftHeader;
