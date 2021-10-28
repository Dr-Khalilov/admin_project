import React from 'react';
import { List, Datagrid, TextField, EmailField, DateField, EditButton, DeleteButton } from 'react-admin';

export const UserList = props => (
    <List {...props}>
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
