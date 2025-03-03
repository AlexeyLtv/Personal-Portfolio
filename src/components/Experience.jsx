import styled from "styled-components"

//CSS
const ExperienceDiv = styled.div`
    width: 100vw;
    background-color: #161513;
    color: white;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    scroll-margin-top: 2vh;

    @media (max-width: 2100px){
        scroll-margin-top: 0vh;
    }

    @media (max-width: 600px){
        scroll-margin-top: -4vh;
    }
`;

//Title
const Title = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-bottom: 5vh;
    margin-top: 16vh;

    @media (max-width: 600px){
        margin-top: 17vh;
        margin-bottom: 4vh;
    }
`;

const H1 = styled.h1`
    font-size: 55px;
    font-weight: bold;
    background: linear-gradient(#FA360E 40%, #510001);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 2100px){
        font-size: 42px;
    }

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

//CV
const CV = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 4vh;
    margin-bottom: 10vh;

    @media (max-width: 600px){
        gap: 5vh;
    }
`;

const Item = styled.div`
    width: 40%;

    @media (max-width: 600px){
        width: 80vw;
    }
`;

const JobPosition = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 1vh;
`;

const JobTitle = styled.div`
    height: 100%;
    width: 60%;
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 2100px){
        gap: 15px;
    }
`;

const JobDate = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: flex-end;
`;

const JobH1 = styled.h1`
    font-size: 22px;
    font-weight: bold;

    @media (max-width: 2100px){
        font-size: 18px;
    }

    @media (max-width: 600px){
        font-size: 18px;
    }
`;

const DateP = styled.p`
    font-size: 15px;
    color: #8491A0;

    @media (max-width: 2100px){
        font-size: 11.4px;
    }


    @media (max-width: 600px){
        font-size: 12px;
    }
`;

//Description

const DescriptionDiv = styled.div`
    width: 100%;
`;

const DescP = styled.p`
    font-size: 15px;
    color: #C5C5C5;

    @media (max-width: 2100px){
        font-size: 12px;
    }

    @media (max-width: 600px){
        font-size: 12px;
    }
`;

const Experience = () => {
    return(
        <ExperienceDiv id="exp">
            {/* Title */}
            <Title>
                <H1>ERFAHRUNGEN</H1>
            </Title>

            {/* CV */}
            <CV>
{/* Learning */}
                <Item>
                    {/* Title and Date */}
                    <JobPosition>
                        <JobTitle>
                            <i className="fa-solid fa-graduation-cap"></i>
                            <JobH1>Fortbildung & Webentwicklung</JobH1>
                        </JobTitle>
                        <JobDate>
                            <DateP>Mai 2023 - heute</DateP>
                        </JobDate>
                    </JobPosition>

                    {/* Job Description */}
                    <DescriptionDiv>
                        <DescP>
                            Während dieser Fortbildung verbesserte ich meine deutschen Sprachkenntnisse (B2 Zertifikat, Ziel C1) und erweiterte mein technisches Know-how. Dabei erlernte ich die Grundlagen von HTML, JavaScript und CSS, sammelte erste praktische Erfahrungen in der Webentwicklung und machte mich mit React sowie Styled Components vertraut.
                        </DescP>
                    </DescriptionDiv>
                </Item>
{/* Lykke */}
                <Item>
                    {/* Title and Date */}
                    <JobPosition>
                        <JobTitle>
                            <i className="fa-solid fa-pen"></i>
                            <JobH1>Digital Mediendesigner</JobH1>
                        </JobTitle>
                        <JobDate>
                            <DateP>Okt 2022 - Mai 2023</DateP>
                        </JobDate>
                    </JobPosition>

                    {/* Job Description */}
                    <DescriptionDiv>
                        <DescP>
                            Meine Aufgaben umfassten die Erstellung webbasierter Medien und Kundenpräsentationen, die den Fortschritt des Unternehmens hervorhoben. Dabei stand ich in engem Austausch mit den Marketing und Designerteams, um bestmögliche Ergebnisse zu erzielen.
                        </DescP>
                    </DescriptionDiv>
                </Item>
{/* Umma */}
                <Item>
                    {/* Title and Date */}
                    <JobPosition>
                        <JobTitle>
                            <i className="fa-solid fa-house"></i>
                            <JobH1>VR Architektur Apps</JobH1>
                        </JobTitle>
                        <JobDate>
                            <DateP>Jul 2020 - Okt 2022</DateP>
                        </JobDate>
                    </JobPosition>

                    {/* Job Description */}
                    <DescriptionDiv>
                        <DescP>
                            Ich war verantwortlich für die Erstellung von VR und Flachbildschirm Erlebnissen unter Einsatz von C++ und Unreal Engine. Zu meinen Aufgaben gehörte das Rendering sowie die 3D-Modellierung von Appartementsplänen. Zudem stand ich in direkter Kommunikation mit Architekten und Bauunternehmen, um ein Projekt zu realisieren, das den Anforderungen der Kunden entspricht.
                        </DescP>
                    </DescriptionDiv>
                </Item>

            </CV>

        </ExperienceDiv>
    )
}

export default Experience