import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Countdown from "./components/countdown/Countdown";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
          <Router>
              <Routes>
                  {/*<Route path="/" element={<Home />} />*/}
                  <Route path="/" element={<Home />} />
              </Routes>
          </Router>
      </Layout>
    </div>
  );
}

export default App;
