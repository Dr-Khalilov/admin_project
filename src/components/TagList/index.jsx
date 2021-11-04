import { Datagrid, DateField, DeleteButton, EditButton, List, TextField } from 'react-admin';


export const TagList = (props) => {
    return (
        <List title='List of Tags' {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='name' />
                <DateField source='created_at' />
                <DateField source='updated_at' />
                <EditButton basePath='/tags' />
                <DeleteButton basePath='/tags' />
            </Datagrid>
        </List>
    );
};