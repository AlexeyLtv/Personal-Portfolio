import { useRef } from "react";
import styled from "styled-components"

const ProjectsDiv = styled.div`
    width: 100vw;
    height: auto;
    background-color: #161513;
    color: white;
    font-family: "Poppins";
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    scroll-margin-top: 20vh;

    @media (max-width: 2100px){
        scroll-margin-top: 17vh;
    }

    @media (max-width: 600px){
        scroll-margin-top: -8vh;
    }
`;

//Title
const Title = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.5vh;

    @media (max-width: 2100px){
        margin-top: 2.5vh;
    }

    @media (max-width: 600px){
        margin-top: 17vh;
    }
`;

const H1 = styled.h1`
    font-size: 55px;
    font-weight: bold;
    background: linear-gradient(#6FBCF0 20%, #01B6EC);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 2100px){
        font-size: 42px;
    }

    @media (max-width: 600px){
        font-size: 35px;
    }
`;

//Projects
const ProjectCards = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    height: auto;

    @media (max-width: 2100px){
        gap: 35px;
    }
`;

const Item = styled.div`
    background-color: #2A2A2A;
    height: 20em;
    width: 30em;
    border-radius: 16px;
    flex: 0 0 auto;
    margin-bottom: 1vh;
    overflow: hidden;
    transition: transform 0.3s;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
        background-color: #464646;
    }

    @media (max-width: 2100px){
        height: 15em;
        width: 22.8em;
    }

    @media (max-width: 600px){
        width: 80vw;
        height: 25vh;
        margin-bottom: 5px;

        &:hover{
            transform: scale(1);
        }
    }
`;

//Video

const VideoDiv = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 80%;
    background: url("./Img/Adam1.png");
    background-size: cover;
    overflow: hidden;
`;

const VideoDiv2 = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 80%;
    background: url("./Img/Shoe1.png");
    background-size: cover;
    overflow: hidden;
`;

const VideoDiv3 = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 80%;
    background: url("./Img/Vr1.png");
    background-size: cover;
    overflow: hidden;
`;

const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s;

    &:hover{
        opacity: 1;
    }
`;

const VideoDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Click = styled.div`
    
`;

const ClickP = styled.p`
    font-weight: bold;
    font-size: 10px;
    color: #C5C5C5;
    margin-left: 0.5vw;
    margin-top: 0.8vh;

    @media (max-width: 2100px){
        font-size: 8px;
    }

    @media (max-width: 600px){
        margin-left: 3vw;
        font-size: 8px;
    }
`;

const VideoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const VideoTitleH1 = styled.h1`
    font-weight: bold;
    font-size: 19px;
    color: white;
    margin-left: 0.5vw;

    @media (max-width: 2100px){
        font-size: 14px;
    }

    @media (max-width: 600px){
        font-size: 12px;
        margin-left: 3vw;
    }
`;

const A = styled.a`
    text-decoration: none;
    color: white;
`;


const Projects = () => {

    //Refs
    const videoRef1 = useRef(null);
    const videoRef2 = useRef(null);
    const videoRef3 = useRef(null);

    //Function 1
    const handleMouseHover = () => {
        if(videoRef1.current)
        {
            videoRef1.current.play();
        }
    };

    const handleMouseLeave = () => {
        if(videoRef1.current)
        {
            videoRef1.current.pause();
            videoRef1.current.currentTime = 0;
        }
    }

    //Function 2
    const handleMouseHover2 = () => {
        if(videoRef2.current)
        {
            videoRef2.current.play();
        }
    };

    const handleMouseLeave2 = () => {
        if(videoRef2.current)
        {
            videoRef2.current.pause();
            videoRef2.current.currentTime = 0;
        }
    };

    //Function 3
    const handleMouseHover3 = () => {
        if(videoRef3.current)
        {
            videoRef3.current.play();
        }
    };

    const handleMouseLeave3 = () => {
        if(videoRef3.current)
        {
            videoRef3.current.pause();
            videoRef3.current.currentTime = 0;
        }
    };

    return(
        <ProjectsDiv id="projects">
            {/* Title */}
            <Title>
                <H1>PROJEKTE</H1>
            </Title>

            {/* Projects */}
            <ProjectCards>
                {/* Item 1 */}
                <A target="_blank" href="https://litvin-portfolio.de/adam-react/"><Item>
                    {/* Video */}
                    <VideoDiv onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>
                        <Video
                            ref={videoRef1}
                            src="./Video/Adam2.mp4"
                            loop
                            muted
                            playsInline
                        />
                    </VideoDiv>
                    {/* Description */}
                    <VideoDesc>
                        <Click>
                            <ClickP>JETZT BESUCHEN</ClickP>
                        </Click>
                        {/* Title */}
                        <VideoTitle>
                            <VideoTitleH1>ARCHITEKTUR PORTFOLIO</VideoTitleH1>
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </VideoTitle>
                    </VideoDesc>
                </Item></A>

                {/* Item 2 */}
                <A target="_blank" href="https://alexeyltv.github.io/sneakersWebsite/"><Item>
                    {/* Video */}
                    <VideoDiv2 onMouseEnter={handleMouseHover2} onMouseLeave={handleMouseLeave2}>
                        <Video
                            ref={videoRef2}
                            src="./Video/Shoe1.mp4"
                            loop
                            muted
                            playsInline
                        />
                    </VideoDiv2>
                    {/* Description */}
                    <VideoDesc>
                        <Click>
                            <ClickP>JETZT BESUCHEN</ClickP>
                        </Click>
                        {/* Title */}
                        <VideoTitle>
                            <VideoTitleH1>ONLINE SHOP</VideoTitleH1>
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </VideoTitle>
                    </VideoDesc>
                </Item></A>

                {/* Item 3 */}
                <A target="_blank" href="https://www.youtube.com/shorts/mNzN7Tn6EYo"><Item>
                    {/* Video */}
                    <VideoDiv3 onMouseEnter={handleMouseHover3} onMouseLeave={handleMouseLeave3}>
                        <Video
                            ref={videoRef3}
                            src="./Video/Vr1.mp4"
                            loop
                            muted
                            playsInline
                        />
                    </VideoDiv3>
                    {/* Description */}
                    <VideoDesc>
                        <Click>
                            <ClickP>JETZT BESUCHEN</ClickP>
                        </Click>
                        {/* Title */}
                        <VideoTitle>
                            <VideoTitleH1>VR PROJEKT</VideoTitleH1>
                            <i className="fa-solid fa-up-right-from-square"></i>
                        </VideoTitle>
                    </VideoDesc>
                </Item></A>
                
                

            </ProjectCards>
        </ProjectsDiv>
    )
}

export default Projects