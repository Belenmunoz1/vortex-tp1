
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeesList from './components/EmployeesList';
import EmployeeForm from './components/EmployeeForm';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormGroup, ModalBody, ModalFooter, ModalHeader,table,button,Modal ,Container, Button} from 'reactstrap';


function App() {

  return (
  <div >
   <BrowserRouter>
   <div>
    <Header/>
      <Routes>
        <Route path='/' exact element={<EmployeesList/>} />
        <Route path='/create-employee' element={<EmployeeForm/>} />
        <Route path='/edit-employee/:id' element={<EmployeeForm/>} />
      </Routes>
      </div>
   </BrowserRouter>
  </div>
  );
}

export default App;
