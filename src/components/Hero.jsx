import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

//Css
const HeroDiv = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 5vh;
    background-color: #161513;
    color: white;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    scroll-margin-top: 20vh;
`;

const Picture = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10vh;
    margin-bottom: 3vh;

    @media (max-width: 2100px){
        margin-top: 8vh;
        margin-bottom: 2vh;
    }

    @media (max-width: 600px){
        justify-content: flex-start;
        height: auto;
        flex-shrink: 0;
    }
`;

//Picture
const Img = styled.div`
    background: linear-gradient(90deg, #FF8660 20%, #B94CCE);
    border-radius: 50%;
    height: 15em;
    width: 15em;
    overflow: hidden;

    @media (max-width: 2100px){
        height: 11em;
        width: 11em;
    }

    @media (max-width: 600px){
        height: 11em;
        width: 11em;
        margin-top: 6vh;
        margin-bottom: 2vh;
        flex-shrink: 0;
    }
`;

const Profile = styled.div`
    width: 100%;
    height: 100%;
    background: url("./Img/Profile4.png");
    background-position: center;
    background-size: 100%;
`;

//Description
const Desc = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 600px){
        height: auto;
    }
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 13px;

    @media (max-width: 600px){
        margin-bottom: 1vh;
    }
`;

const H1 = styled.h1`
    font-size: 55px;
    font-weight: bold;
    z-index: 5;

    @media (max-width: 2100px){
        font-size: 45px;
    }

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

const Span = styled.span`
    background: linear-gradient(45deg, #FF8660 40%, #B94CCE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 50%;
    margin-bottom: 30px;

    @media (max-width: 2100px){
        width: 34%;
    }

    @media (max-width: 600px){
        width: 80%;
        margin-bottom: 2vh;
    }
`;

const P = styled.p`
    text-align: center;
    font-size: 18px;
    font-weight: 200;
    color: #C5C5C5;

    @media (max-width: 2100px){
        font-size: 15px;
    }

    @media (max-width: 600px){
        font-size: 12px;
    }
`;

const ButtonsDiv = styled.div`
    width: 100%;
    height: 20%;
    align-items: center;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media (max-width: 2100px){
        gap: 25px;
    }

    @media (max-width: 600px){
        gap: 20px;
    }
`;

const Button1Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 10%;

    @media (max-width: 600px){
        width: auto;
        justify-content: center;
    }
`;

const Button2Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 10%;

    @media (max-width: 600px){
        width: auto;
        justify-content: center;
    }
`;

const Button1 = styled.button`
    font-size: 21px;
    font-weight: bold;
    border: 3px solid transparent;
    padding: 25px 30px;
    background-color: white;
    border-radius: 40px;
    transition: all 0.3s;
    cursor: pointer;
    width: 7.63vw;

    &:hover{
        background-color: transparent;
        border: 3px solid white;
        color: white;
        transform: scale(1.05);
    }

    &:active{
        color: black;
        background-color: white;
    }

    @media (max-width: 2100px){
        padding: 20px 45px;
        width: auto;
        font-size: 16px;
    }

    @media (max-width: 600px){
        font-size: 15px;
        padding: 20px 42px;
        width: auto;
    }
`;

const Button2 = styled.button`
    font-size: 21px;
    font-weight: bold;
    border: none;
    padding: 25px 30px;
    background-color: transparent;
    color: white;
    border: 3px solid white;
    border-radius: 40px;
    transition: all 0.3s;
    cursor: pointer;
    width: 8vw;

    &:hover{
        background-color: white;
        color: black;
        transform: scale(1.05);
    }

    &:active{
        background-color: transparent;
        color: black;
    }

    @media (max-width: 2100px){
        padding: 20px 37px;
        width: auto;
        font-size: 16px;
    }

    @media (max-width: 600px){
        font-size: 15px;
        width: 33vw;
        padding: 20px 25px;
    }
`;

//Exp
const Exp = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 40px;
    margin-top: 11vh;

    @media (max-width: 2100px){
        margin-top: 15vh;
    }

    @media (max-width: 600px){
        align-items: center;
        height: 20vh;
        margin-top: 0.2vh;
    }
`;

const TextDiv = styled.div`
    width: 100%;
    height: 25%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 3vh;

    @media (max-width: 2100px){
        margin-bottom: 3vh;
    }
`;

const IconsDiv = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px){
        width: 80%;
    }
`;

const H2 = styled.h2`
    font-size: 20;
    font-weight: 600;
    color: #C5C5C5;

    @media (max-width: 2100px){
        font-size: 19px;
    }

    @media (max-width: 600px){
        font-size: 16px;
        height: 20%;
        margin-bottom: 2vh;
    }
`;

const Item = styled.div`
    width: 10em;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 2100px){
        width: 8em;
    }

    @media (max-width: 600px){
        height: 50%;
    }
`;

const ItemText = styled.p`
    color: #C5C5C5;

    @media (max-width: 2100px){
        font-size: 13px;
    }

    @media (max-width: 600px){
        font-size: 10px;
    }
`;

const A = styled.a`
    text-decoration: none;
`;

//GSAP Animation CSS

const Cover = styled.div`
    position: absolute;
    height: 100vh;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: #161513;
    opacity: 1;
    pointer-events: none;
`;

const Hallo = styled.span`
    opacity: 0;
`;

const Emoji = styled.span`
    opacity: 0;
    display: inline-block;
`;

const Name = styled.span`
    opacity: 0;
`;

const Oleksiy = styled.span`
    opacity: 0;
`;

//Main

const Hero = () => {

    //GSAP Animation

    const coverRef = useRef(null);
    const halloRef = useRef(null);
    const emojiRef = useRef(null);
    const nameRef = useRef(null);
    const oleksiyRef = useRef(null);

    useEffect(() => {

        gsap.to(halloRef.current, {opacity: 1, duration: 3, ease: "sine.inOut", delay: 0.2});
        gsap.to(nameRef.current, {opacity: 1, duration: 2, ease: "sine.inOut", delay: 1});
        gsap.to(coverRef.current, {opacity: 0, duration: 1, ease: "sine.inOut", delay: 2.5});
        gsap.to(oleksiyRef.current, {opacity: 1, duration: 1, ease: "sine.inOut", delay: 1.5});
        gsap.to(emojiRef.current, {opacity: 1, duration: 2, ease: "sine.inOut", delay: 2})
        gsap.to(emojiRef.current, {rotation: 45, duration: 0.5, ease: "power1.inOut", yoyo: true, delay: 2.5});
        gsap.to(emojiRef.current, {rotation: 0, duration: 0.5, ease: "power1.inOut", yoyo: true, delay: 3});

    }, []);

    return(
        <HeroDiv id="hero">
            <Cover ref={coverRef}></Cover>
            {/* Picture */}
            <Picture>
                <Img>
                    <Profile></Profile>
                </Img>
            </Picture>

            {/* Description */}
            <Desc>
                {/* Title */}
                <Title>
                    <H1><Hallo ref={halloRef}>Hallo</Hallo> <Emoji ref={emojiRef}>👋</Emoji></H1>
                    <H1><Name ref={nameRef}>Ich heiße <Oleksiy ref={oleksiyRef}><Span>Oleksiy</Span></Oleksiy></Name></H1>
                </Title>
                {/* About */}
                <About>
                    <P>
                        Schön, dass Sie hier sind! Ich bin ein angehender Webentwickler aus der Ukraine und sehr lernbegierig. Während meiner kurzen Karriere konnte ich in verschiedenen Ländern mit internationalen Teams arbeiten und eine solide Grundlage in meinen technischen Fähigkeiten aufbauen. Unten finden Sie mein Portfolio sowie meine Kontaktinformationen. Ich freue mich darauf, mit Ihnen zu sprechen!
                    </P>
                </About>
                {/* Buttons */}
                <ButtonsDiv>
                    <Button1Div>
                        <A href="#contact"><Button1>Kontakt</Button1></A>
                    </Button1Div>
                    <Button2Div>
                        <A href="./Lebenslauf_Litvin.pdf" download><Button2>Lebenslauf</Button2></A>
                    </Button2Div>
                </ButtonsDiv>
            </Desc>

            {/* Experience */}
            <Exp>
                {/* Text */}
                <TextDiv>
                    <H2>ERFAHRUNGEN MIT</H2>
                </TextDiv>

                {/* Icons */}
                <IconsDiv>
                    {/* Item */}
                    <Item>
                        <i className="fa-brands fa-js"></i>
                        <ItemText>JavaScript</ItemText>
                    </Item>
                    
                    {/* Item */}
                    <Item>
                        <i className="fa-brands fa-html5"></i>
                        <ItemText>HTML</ItemText>
                    </Item>

                    {/* Item */}
                    <Item>
                        <i className="fa-brands fa-css3-alt"></i>
                        <ItemText>CSS</ItemText>
                    </Item>

                    {/* Item */}
                    <Item>
                        <i className="fa-brands fa-react"></i>
                        <ItemText>React</ItemText>
                    </Item>
                </IconsDiv>
            </Exp>

        </HeroDiv>
    )
}

export default Hero