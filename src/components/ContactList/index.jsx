import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField, EmailField,
} from 'react-admin';

export const ContactList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField  source='phone' />
            <EmailField source='email' />
            <TextField multiline source='message' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/contact' />
            <DeleteButton basePath='/contact' />
        </Datagrid>
    </List>
);
