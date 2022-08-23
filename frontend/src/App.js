
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './layout/Navbar';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import{BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import AddUser from './users/AddUser';
import LandPage from './pages/langingpage';
import Invoice from './pages/Invoice';
function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandPage/>}/>
          <Route exact path="/findall" element={<Home/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/invoice" element={<Invoice/>}/>



        </Routes>
       
    </Router>
       
     
    </div>
  );
}

export default App;
