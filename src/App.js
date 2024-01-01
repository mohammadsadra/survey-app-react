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

function App() {
  return (
    <div>
      <Layout>
          <Router>
              <Routes>
                  {/*<Route path="/" element={<Home />} />*/}
                  <Route path="/QuestionOne" element={<QuestionOne />} />
                  <Route path="/" element={<UserInformation />} />
              </Routes>
          </Router>
      </Layout>
    </div>
  );
}

export default App;
