import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Layout from "./components/layout/Layout";
import UserInformation from "./components/userInformation/UserInformation";
import QuestionOne from "./components/questionOne/QuestionOne";
import QuestionTwo from "./components/questionTwo/QuestionTwo";
import QuestionThree from "./components/questionThree/QuestionThree";

function App() {
  return (
    <div>
      <Layout>
          <Router>
              <Routes>
                  {/*<Route path="/" element={<Home />} />*/}
                  <Route path="/QuestionThree" element={<QuestionThree />} />
                  <Route path="/QuestionTwo" element={<QuestionTwo />} />
                  <Route path="/QuestionOne" element={<QuestionOne />} />
                  <Route path="/" element={<UserInformation />} />
              </Routes>
          </Router>
      </Layout>
    </div>
  );
}

export default App;
