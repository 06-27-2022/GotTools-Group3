
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import ViewAll from './users/ViewAll';
import{BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import AddUser from './users/AddUser';
import LandPage from './langingpage';
import Invoice from './invoice_componets/Invoice';
import Footer from './layout/footer';
import Login from './loginpage';
import RegisterSupplier from './users/RegisterSupplier';
import ViewSuppliers from './users/ViewSuppliers';
import Supplies from './pages/Supplies';

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
          <Route exact path="/registersupplier" element={<RegisterSupplier/>}/>
          <Route exact path="/viewsuppliers" element={<ViewSuppliers/>}/>
          <Route exact path="/supplies" element={<Supplies/>}/>
         



        </Routes>
       <Footer/>
    </Router>
       
     
    </div>
  );
}

export default App;
