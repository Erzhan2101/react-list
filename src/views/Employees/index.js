import React, {useEffect, useState} from 'react';
import axios from "axios";
import EmployeesItem from "../../components/EmployeesItem";

const Employees = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        axios('https://614af56ce4cc2900179eae02.mockapi.io/api/employees')
            .then(({data}) => setEmployees(data))
    }, [])

    return (

        <div className="row mt-5 text-center">
            <div className='col-6 offset-md-3'>
                <table className="table table-bordered border-primary">
                    <thead>
                    <tr className=' table-info table-bordered border-primary'>
                        <th scope="col ">
                            <input type='checkbox'/>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Age</th>
                    </tr>
                    {
                        employees.map(el =>
                            <EmployeesItem key={el.id} el={el} />
                        )
                    }
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Employees;