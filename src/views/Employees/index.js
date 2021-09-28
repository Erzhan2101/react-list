import React, {useEffect, useState} from 'react';
import axios from "axios";
import EmployeesItem from "../../components/EmployeesItem";

const Employees = () => {

    const [employees, setEmployees] = useState([])
    const [isCheckedAll, setIsCheckedAll] = useState(false)
    const [selected, setSelected] = useState([])


    const handleCheck = (id, status) => {
        // setSelected(status && selected.filter(el => el.id !== id)) ? [...selected, employees.find(item => item.id === id)]
        //     : selected.filter(item => item.id !== id && [...selected])

        setSelected(status && selected.filter(el => el.id !== id) ? [...selected, employees.find(el => el.id === id)] :
            selected.filter((item) => item.id !== id && [...selected]))

    }

    useEffect(() => {
        axios('https://614af56ce4cc2900179eae02.mockapi.io/api/employees')
            .then(({data}) => setEmployees(data))
    }, [])

    return (
        <div className="row mt-5 ">
            <div className='col-6 offset-md-3 text-center'>
                <table className="table table-bordered border-primary">
                    <thead>
                    <tr className=' table-info table-bordered border-primary'>
                        <th scope="col ">
                            <input type='checkbox' onChange={(e) => setIsCheckedAll(e.target.checked)}/>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Age</th>
                    </tr>
                    {employees.map(el => <EmployeesItem key={el.id} el={el} isCheckedAll={isCheckedAll}
                                                        handleCheck={handleCheck}/>)}
                    </thead>
                </table>
            </div>
            <h2>Пользователь: {selected.map(el => <span key={el.id}>{el.name}</span>)}</h2>
        </div>
    );
};

export default Employees;