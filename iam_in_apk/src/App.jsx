import './App.css';
import Home from './Home/Home.jsx';
import {useState} from 'react';
import Quiz from './Quiz/Quiz.jsx';
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import Proforientation from './Proforientation/Proforientation.jsx';

function App() {
	
	const [isShowHome, setIsShowHome] = useState(false);
	const [isShowQuiz, setIsShowQuiz] = useState(true);
	const [isShowProf, setIsShowProf] = useState(false);
	
	const setShowHomeHandler = () => {
		if (isShowHome) return;
		else {
			setIsShowHome(prevState => !prevState);
			setIsShowQuiz(false)
			setIsShowProf(false)
		}
	};
	
	const setShowQuizHandler = () => {
		if (isShowQuiz) return;
		else {
			setIsShowQuiz(prevState => !prevState)
			setIsShowHome(false)
			setIsShowProf(false)
		}
	};
	
	const setShowProfHandler = () => {
		if (isShowProf) return;
		else {
			setIsShowProf(prevState => !prevState)
			setIsShowHome(false)
			setIsShowQuiz(false)
		}
	};
	
	return (
		<>
			<Header/>
			<Nav onShowHomeHandler={setShowHomeHandler}
			     onShowQuizHandler={setShowQuizHandler}
			     onShowProfHandler={setShowProfHandler}/>
			{isShowHome && <Home />}
			{isShowQuiz && <Quiz />}
			{isShowProf && <Proforientation />}
		</>
	);
}

export default App;
