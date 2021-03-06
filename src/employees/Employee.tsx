import * as React from 'react';
import { EmployeeModel } from './models';

interface EmployeeProps {
    model: EmployeeModel;
}

export const Employee: React.StatelessComponent<EmployeeProps> = ({model}) => {
    return (
        <li>{model.first_name}</li>
    );
};