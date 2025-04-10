import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Player from './components/Player/Player';
import Footer from './components/Footer/Footer';
import Callback from './pages/Callback';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const accessToken = localStorage.getItem("access_token");

  return (
    <Router>
      <Routes>
        {/* Callback do Spotify */}
        <Route path="/callback" element={<Callback />} />

        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <Sidebar accessToken={accessToken} />
              <Main />
              {accessToken ? <Player /> : <Footer />}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;