import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from "./components/About";
import Main from './components/Main';
import TaskDetails from './components/TaskDetails';



const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Main />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;