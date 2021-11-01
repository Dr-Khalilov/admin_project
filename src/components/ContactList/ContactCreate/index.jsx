import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const ContactCreate = props => (
    <Create title='Create a contact' {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='phone' />
            <TextInput source='email' />
            <TextInput source='message' />
        </SimpleForm>
    </Create>
);