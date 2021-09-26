import React, {useState} from 'react';

const EmployeesItem = ({el, }) => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <tr className="table-danger  table-bordered border-primary">
            <td ><input checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} type='checkbox'/></td>
            <td>{el.name}</td>
            <td>{el.surname}</td>
            <td>{el.age}</td>
        </tr>
    );
};

export default EmployeesItem;