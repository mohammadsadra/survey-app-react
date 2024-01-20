import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import UserInformation from "./components/userInformation/UserInformation";
import QuestionOne from "./components/Questions/questionOne/QuestionOne";
import QuestionTwo from "./components/Questions/questionTwo/QuestionTwo";
import QuestionThree from "./components/Questions/questionThree/QuestionThree";
import ThanksPage from "./components/thanksPage/ThanksPage";
import {useState} from "react";
import FinishTime from "./components/thanksPage/FinishTimePage";

function App() {
    const[questionOne, setQuestionOne] = useState('');
    const[questionTwo, setQuestionTwo] = useState([]);
    const[questionThree, setQuestionThree] = useState('');
    const[userData, setUserData] = useState('');

    return (
        <div>
            <Layout>
                <Router>
                    <Routes>
                        <Route path="/finish" element={<FinishTime />} />
                        <Route path="/Thanks" element={<ThanksPage userData={userData} q1={questionOne} q2={questionTwo} q3={questionThree} />} />
                        <Route path="/QuestionThree" element={<QuestionThree setQuestionAnswer={setQuestionThree}/>} />
                        <Route path="/QuestionTwo" element={<QuestionTwo setQuestionAnswer={setQuestionTwo} />} />
                        <Route path="/QuestionOne" element={<QuestionOne setQuestionAnswer={setQuestionOne} />} />
                        <Route path="/" element={<UserInformation setUserData={setUserData} />} />
                    </Routes>
                </Router>
            </Layout>
        </div>
    );
}

export default App;
