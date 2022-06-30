import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import About from "./components/About";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/Notestate";

function App() {
  return (
    <>
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <div className="container">
    <Routes>
      <Route path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
          </Route>
    </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
     </>
  );
}

export default App;
