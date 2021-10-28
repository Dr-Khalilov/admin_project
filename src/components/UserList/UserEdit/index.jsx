import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';

export const UserEdit = props => (
    <Edit title='Edit an User' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='email' />
            <DateInput label='Updated' source='updated_at' />
        </SimpleForm>
    </Edit>
);