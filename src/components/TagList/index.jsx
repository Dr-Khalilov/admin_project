import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField,
} from 'react-admin';


export const TagList = (props) => {
    return (
        <List {...props}>
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