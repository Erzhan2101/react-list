import React, {useEffect, useState} from 'react';
import axios from "axios";

const Employees = () => {

    const [employees, setEmployees] = useState([])
    // const [is]


    useEffect(() => {
        axios('https://614af56ce4cc2900179eae02.mockapi.io/api/employees')
            .then(({data}) => setEmployees(data))
    }, [])

    return (

        <div className="row mt-5 ">
            <div className='col-6 offset-md-3'>
                <table className="table table-bordered border-primary">
                    <thead>
                    <tr className='text-center table-info table-bordered border-primary'>
                        <th scope="col">
                            <label htmlFor='chec' className='me-3'>Select all</label>
                            <input type='checkbox' id='chec'/>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Age</th>
                    </tr>
                    {
                        employees.map(el =>
                            <tr className="table-danger table-bordered border-primary">
                                <td className='text-center'><input type='checkbox'/></td>
                                <td>{el.name}</td>
                                <td>{el.surname}</td>
                                <td>{el.age}</td>
                            </tr>
                        )
                    }
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default Employees;