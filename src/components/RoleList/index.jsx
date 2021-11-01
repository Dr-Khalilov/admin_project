import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField,
} from 'react-admin';

export const RoleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/role' />
            <DeleteButton basePath='/role' />
        </Datagrid>
    </List>
);
