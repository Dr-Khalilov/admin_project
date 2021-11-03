import {
    List,
    Datagrid,
    EditButton,
    DeleteButton,
    ImageField,
    FileField, ArrayField,
} from 'react-admin';
import { MyUrlField } from '../MyUrlField';

export const MediaList = (props) => (
    <List {...props}>
        <ArrayField source='media' fieldKey='id'>
            <Datagrid>
                <ImageField source='url' title='name' />
                <FileField source='url' title='fullName' download />
                <EditButton basePath='/media' />
                <DeleteButton basePath='/media' />
            </Datagrid>
        </ArrayField>
    </List>
);