import React from 'react';
import { Datagrid, DateField, DeleteButton, EditButton, EmailField, List, TextField } from 'react-admin';

export const UserList = props => (
    <List title='List of Users' {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <EmailField source='email' />
            <TextField source='password' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/user' />
            <DeleteButton basePath='/user' />
        </Datagrid>
    </List>
);
