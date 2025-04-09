import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Player from './components/Player/Player';

function App() {

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <Player />
    </div>
  )
}

export default App
