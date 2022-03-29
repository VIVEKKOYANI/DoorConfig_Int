import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop02 from "./components/Desktop02";
import Desktop05 from "./components/Desktop05";
import DoorForm from './components/Desktop04';
import DoorUserList from "./components/Desktop01";
function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<DoorUserList />} />
        <Route exact path="/desk02" element={<Desktop02 />} />
        <Route exact path="/desk05/:id" element={<Desktop05 />} />
        <Route exact path="/desk04" element={<DoorForm />} />
        <Route exact path="/desk04/:id" element={<DoorForm />} />
      </Routes>
    </Router>
  );
}

export default App;
