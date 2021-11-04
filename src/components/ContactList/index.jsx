import { Datagrid, DateField, DeleteButton, EditButton, EmailField, List, TextField } from 'react-admin';

export const ContactList = (props) => (
    <List title='List of contacts' {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='phone' />
            <EmailField source='email' />
            <TextField multiline source='message' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/contact' />
            <DeleteButton basePath='/contact' />
        </Datagrid>
    </List>
);
