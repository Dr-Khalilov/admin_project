import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = props => (
    <Create title='Create an User' {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='email' />
            <TextInput source='password' />
        </SimpleForm>
    </Create>
);