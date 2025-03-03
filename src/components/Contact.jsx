import styled from "styled-components"

const ContactDiv = styled.div`
    width: 100vw;
    height: 39vh;
    background-color: #191919;
    color: white;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 600px){
        height: auto;
    }
`;

//Title
const TitleDiv = styled.div`
    width: 40%;
    display: flex;
    margin-top: 7vh;

    @media (max-width: 600px){
        width: 80vw;
    }
`;

const H1 = styled.h1`
    font-size: 23px;
    font-weight: 600;
    color: white;

    @media (max-width: 2100px){
        font-size: 18px;
    }
`;

//Description
const DescDiv = styled.div`
    width: 40%;
    display: flex;
    margin-top: 2.5vh;

    @media (max-width: 600px){
        width: 80vw;
    }
`;

const P = styled.p`
    font-size: 14px;
    font-weight: 200;
    color: #C5C5C5;
    margin-bottom: 2vh;

    @media (max-width: 2100px){
        font-size: 12px;
    }
`;

//Email and Phone
const ContactInfoDiv = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 1vh;

    @media (max-width: 2100px){
        gap: 8px;
    }

    @media (max-width: 600px){
        width: 80vw;
    }
`;

const ContactP = styled.p`
    color: white;
    font-size: 15px;

    @media (max-width: 2100px){
        font-size: 11.5px;
    }
`;

//Social
const SocialDiv = styled.div`
    width: 40%;
    display: flex;
    margin-top: 4vh;
    gap: 20px;

    @media (max-width: 2100px){
        gap: 15px;
    }

    @media (max-width: 600px){
        width: 80vw;
        margin-bottom: 6vh;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: white;
`;

const Contact = () => {
    return(
        <ContactDiv id="contact">
            {/* Title */}
            <TitleDiv>
                <H1>Kontakt</H1>
            </TitleDiv>

            {/* Description */}
            <DescDiv>
                <P>
                    Wenn Sie an meinen Projekten interessiert sind und einen genaueren Einblick wünschen, besuchen Sie gern mein Instagram und Youtube, um meine mit Unreal Engine realisierten Erlebnisse zu entdecken, oder mein GitHub, um meine Webentwicklungsprojekte kennenzulernen. Ich wünsche Ihnen einen schönen Tag!
                </P>
            </DescDiv>

            {/* Email and Phone */}
            <ContactInfoDiv>
                <i className="fa-regular fa-envelope"></i>
                <ContactP>alexlitvin1@yahoo.com</ContactP>
            </ContactInfoDiv>
            <ContactInfoDiv>
                <i className="fa-solid fa-phone"></i>
                <ContactP>+49 175 880 1126</ContactP>
            </ContactInfoDiv>

            {/* Social */}
            <SocialDiv>
                <A target="_blank" href="https://www.instagram.com/alexeyltv/"><i className="fa-brands fa-instagram"></i></A>
                <A target="_blank" href="https://www.linkedin.com/in/litvin-in/"><i class="fa-brands fa-linkedin"></i></A>
                <A target="_blank" href="https://github.com/AlexeyLtv"><i className="fa-brands fa-github"></i></A>
            </SocialDiv>
        </ContactDiv>
    )
}

export default Contact