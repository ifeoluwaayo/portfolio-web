import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";
import Main from "./components/Main";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillPage from "./components/MySkillPage";
import { AnimatePresence } from "framer-motion";
import SoundBar from "./subComponents/SoundBar";
function App() {
	return (
		<div>
			<GlobalStyle />

			<ThemeProvider theme={lightTheme}>
				<SoundBar />
				<AnimatePresence exitBeforeEnter>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/about" component={AboutPage} />
						<Route exact path="/work" component={WorkPage} />
						<Route exact path="/skill" component={MySkillPage} />
					</Switch>
				</AnimatePresence>
			</ThemeProvider>
		</div>
	);
}

export default App;
