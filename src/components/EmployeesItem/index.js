import React, {useEffect, useState} from 'react';

const EmployeesItem = ({el, isCheckedAll, handleCheck}) => {
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        setIsChecked(isCheckedAll)
    }, [isCheckedAll])

    return (
        <tr className="table-danger  table-bordered border-primary">
            <td><input checked={isChecked} onChange={(e) => {
                setIsChecked(e.target.checked)
                handleCheck(el.id, e.target.checked)
            }} type='checkbox'/></td>
            <td>{el.name}</td>
            <td>{el.surname}</td>
            <td>{el.age}</td>
        </tr>
    );
};

export default EmployeesItem;