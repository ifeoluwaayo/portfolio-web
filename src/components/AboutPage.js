import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import astronaut from "../assets/Images/spaceman.png";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;
const Spaceman = styled.div`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;
	animation: ${float} 4s ease infinite;
	img {
		width: 100%;
		height: auto;
	}
`;
const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	padding: 2rem;
	width: 50vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.2;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(0.6rem + 1vw);
	backdrop-filter: blur(4px);

	position: absolute;
	left: calc(5rem + 5vw);
	top: 10rem;
	font-family: "Ubuntu Mono", monospace;
	font-style: italic;
`;

const AboutPage = () => {
	return (
		<ThemeProvider theme={DarkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
				<ParticleComponent theme="dark" />

				<Spaceman>
					<img src={astronaut} alt="spaceman" />
				</Spaceman>
				<Main>
					I am Adelaja Ayomide a Crypto enthusiast (Futures) and Entry
					level Full stack developer with strengths in React (JS /
					Native), Firebase, UI/UX designing and interests in ML and
					Blockchain development. I consider myself a grounded
					developer with an entrepreneurial spirit.
					<br /> <br />
					I'm a curious learner and I like trying new things and
					building great projects. I'm also an independent freelancer.
					I love to travel, listen to music talk about Space & Earth
					and read books.
					<br /> <br />I am looking for opportunities in stable
					startups and product based companies. With the right
					resources and team members, I can bring wonders to any
					company I am privileged to work with.
				</Main>

				<BigTitle text="ABOUT" top="10%" left="5%" />
			</Box>
		</ThemeProvider>
	);
};

export default AboutPage;
