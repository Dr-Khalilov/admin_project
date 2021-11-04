import { Create, SimpleForm, TextInput } from 'react-admin';

export const ContactCreate = props => (
    <Create title='Create a contact' {...props}>
        <SimpleForm>
            <TextInput source='name' resettable />
            <TextInput type='tel' resettable source='phone' />
            <TextInput type='email' resettable source='email' />
            <TextInput type='text' multiline resettable source='message' />
        </SimpleForm>
    </Create>
);