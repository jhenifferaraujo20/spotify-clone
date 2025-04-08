import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Main />
      <Footer />
    </div>
  )
}

export default App
