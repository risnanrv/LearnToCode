import './App.css';
import { HashRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Categories from './Pages/Categories';
import Tutorials from './Pages/Tutorials';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/tutorial' element={<Tutorials/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
