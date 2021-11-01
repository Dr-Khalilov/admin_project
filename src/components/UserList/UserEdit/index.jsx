import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = props => (
    <Edit title='Edit an User' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='email' />
        </SimpleForm>
    </Edit>
);