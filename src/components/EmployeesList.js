import { useSelector , useDispatch} from "react-redux";
import {deleteEmployee} from "../features/employeeSlice"
import {Link} from 'react-router-dom'

function EmployeesList () {

    const employees = useSelector ( state => state.employees)
    const dispatch= useDispatch()

    const handleDelete = (id) => {
        dispatch (deleteEmployee(id))
    }
    return (
        <div> 
            <header>
                <h1>Empleados Actuales {employees.length}</h1>
             <Link to={'/create-employee'}  color='primary'>
             Agregar Empleado 
             </Link> 
            
            </header>
            { employees.map (employee =>(
                <div key= {employee.id}>
                    <h1> Firs name: {employee.first_name}</h1>
                    <h3> Email :{employee.email}</h3>
                    <h3> Phone number : {employee.phone_number}</h3>
                    <h3> Hire date: {employee.hire_data}</h3>
                    <h3> Salary :{employee.salary}</h3>
                    <h3> Comission :{employee.comission_pct}</h3>
                    <button onClick={() =>handleDelete (employee.id)} >Delete</button>
                    <Link to={`/edit-employee/${employee.id}`}>Edit</Link>
                    
                </div>
            ))};
            </div>
    );

};

export default EmployeesList