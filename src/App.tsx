import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Main } from './main/main';
import Login from './Pages/login';
import Navbar from './Component/Navbar';
import CreatePost from './create-post/createpost';
import "./App.css"

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/createpost' element={<CreatePost/>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
