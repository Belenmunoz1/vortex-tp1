import {useState, useEffect}from 'react';
import { useDispatch,useSelector} from 'react-redux'
import { addEmployee, editEmployee} from '../features/employeeSlice'
import {v4 as uuid} from 'uuid'
import { useNavigate , useParams} from 'react-router-dom';


function EmployeeForm () {

    const [employee, setEmployee] = useState ({
        employee_id:"",
        first_name:"",
        email:"",
        phone_number:"",
        hire_data:"",
        salary:"",
        comission_pct:""
    });

    const dispatch = useDispatch ();
    const navigate = useNavigate ();
    const params = useParams()
    const employees = useSelector ( state => state.employees)

    const handleChange = (e) => {
        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
            if (params.id) {
                dispatch(editEmployee(employee))

            } else {
                dispatch(
                    addEmployee({
                    ...employee,
                    id: uuid(),
                   } ,alert ('Usuario agregado exitosamente :)'),
                   ),
                )
            }
       
      navigate ('/');
    };

    useEffect(() => {
        if (params.id) {
           setEmployee( employees.find((employee) => employee.id === params.id));
        }

    }, []);

    return (
        <form onSubmit={handleSubmit}>
            < input type = "number" placeholder= "ingrese nro empleado" name="employee_id" onChange={handleChange} value={employee.employee_id}/>
            < input type = "text" placeholder="ingrese nombre" name="first_name" onChange={handleChange} value={employee.first_name}/>
            < input type = "email" placeholder="ingrese mail" name="email" onChange={handleChange} value={employee.email}/>
            < input type = "number" placeholder="ingrese celular" name="phone_number" onChange={handleChange} value={employee.phone_number}/>
            < input type = "date" placeholder="ingrese fecha de contrato" name="hire_data" onChange={handleChange} value={employee.hire_data}/>
            < input type = "number" placeholder="ingrese salario" name="salary" onChange={handleChange} value={employee.salary}/>
            < input type = "number" placeholder="ingrese comision" name="comission_pct" onChange={handleChange} value={employee.comission_pct}/>
            <button> save</button>
            <button> cancel</button>
            
        </form>


    )

}

export default EmployeeForm