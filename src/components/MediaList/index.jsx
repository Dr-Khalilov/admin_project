import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField, EmailField,
} from 'react-admin';
import { MyUrlField } from '../MyUrlField';

export const MediaList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='name' />
            <TextField source='fullName' />
            <EmailField source='mimeType' />
            <MyUrlField source='url' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/media' />
            <DeleteButton basePath='/media' />
        </Datagrid>
    </List>
);