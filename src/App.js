import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from "./context/notes/noteState";
function App() {
  return (
    <>
      <NoteState>
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/About' element={<About/>}/>
        </Routes>
      </Router>
    </div>
      </NoteState>
    </>
  );
}

export default App;
