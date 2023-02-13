import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {
        id:"1",
        employee_id : "11",
        first_name: "MATIAS",
        email: "MATIAS@VORTEX",
        phone_number : "351111111",
        hire_data: "10-07-2010",
        salary: "$800,000 ",
        comission_pct:"100",
    },
    {
        id:"2",
        employee_id : "12",
        first_name: "MARIANO",
        email: "MARIANO@VORTEX",
        phone_number : "3512222222",
        hire_data: "05-04-2019",
        salary: "$500.000",
        comission_pct:" 50",
},
    {
        id:"3",
        employee_id :"13", 
        first_name: "JOSE",
        email: "JOSE@VORTEX",
        phone_number : "3513333333",
        hire_data: "23-10-2021",
        salary: "$400.000",
        comission_pct:" 70",
    },

];

export const employeeSlice = createSlice ({
    name: "employees",
    initialState,
    reducers : {
        addEmployee:(state,action) => {
        state.push(action.payload);
        },
        deleteEmployee: (state,action) => {
            const employeeFound=state.find(employee => employee.id === action.payload)
            if (employeeFound) {
                state.splice(state.indexOf(employeeFound),1)
            }
        },
    
        editEmployee: (state,action) => {
            const{id,first_name,email,phone_number,hire_data,salary,comission_pct}= action.payload
            const foundEmployee = state.find(employee=> employee.id===id)
            if (foundEmployee){
                foundEmployee.first_name= first_name
                foundEmployee.email= email
                foundEmployee.phone_number= phone_number
                foundEmployee.hire_data= hire_data
                foundEmployee.salary= salary
                foundEmployee.comission_pct= comission_pct

            }
        },

    },
});

export const {addEmployee , deleteEmployee,editEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;