
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './layout/Navbar';
import Navbar from './layout/Navbar';
import ViewAll from './users/ViewAll';
import{BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import AddUser from './users/AddUser';
import LandPage from './langingpage';
import Invoice from './invoice_componets/Invoice';
import Footer from './layout/footer';
import Login from './loginpage'
import InTest from './invoice_componets/TestMain';
import TCus from  './invoice_componets/tCust';
import TItems from  './invoice_componets/tItems.5js';
import TSup from  './invoice_componets/tSup';


function App() {
  return (
    <div className="App">
    <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<LandPage/>}/>
          <Route exact path="/findall" element={<ViewAll/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/invoice" element={<Invoice/>}/>
          <Route exact path="/loginpage" element={<Login/>}/>
          <Route exact path="/test" element={<InTest/>}/>
          <Route exact path="/testSup" element={<TSup/>}/>
          <Route exact path="/testItems" element={<TItems/>}/>
          <Route exact path="/testCust" element={<TCus/>}/>



        </Routes>
       <Footer/>
    </Router>
       
     
    </div>
  );
}


export default App;
