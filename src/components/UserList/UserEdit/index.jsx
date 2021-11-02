import { Edit, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = props => (
    <Edit title='Edit an User' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' resettable type='text' />
            <TextInput type='email' source='email' resettable />
        </SimpleForm>
    </Edit>
);