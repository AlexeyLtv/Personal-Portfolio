import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components"

const NavbarDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: center;
    align-items: center;
    background-color: #222222;
    color: white;
    height: 7vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;

    @media (max-width: 600px){
    flex-direction: row;
    justify-content: flex-end;
   }
`;

const List = styled.ul`
    display: flex;
    width: 100%;
    list-style: none;
    justify-content: center;
    align-items: center;
    gap: 2vw;

    @media (max-width: 600px){
    gap: 15px;
   }
`;

const ListItem = styled.li`
   font-family: "Plus Jakarta Sans";
   font-size: 15px;
   cursor: pointer;
   transition: color 0.1s;

   &:hover{
    color: lightgray;
   }

   @media (max-width: 2100px){
        font-size: 12px;
    }

   @media (max-width: 600px){
    font-size: 15px;
   }
`;

const A = styled.a`
    text-decoration: none;
    color: white;
`;

const Cover = styled.div`
    opacity: 1;
    background-color: #161513;
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Navbar = () => {

    //GSAP Animation

    const coverRef = useRef(null);

    useEffect(() => {
        gsap.to(coverRef.current, {y: "-7vh", duration: 1, delay: 0.1});
    });

    return(
        <NavbarDiv>
            <Cover ref={coverRef}></Cover>
            <List>
                <A href="#hero"><ListItem>Startseite</ListItem></A>
                <A href="#projects"><ListItem>Projekte</ListItem></A>
                <A href="#exp"><ListItem>Erfahrung</ListItem></A>
                <A href="#contact"><ListItem>Kontakt</ListItem></A>
            </List>
        </NavbarDiv>
    )
}

export default Navbar