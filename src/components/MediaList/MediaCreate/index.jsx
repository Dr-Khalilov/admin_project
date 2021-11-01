import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const MediaCreate = props => (
    <Create title='Create a media' {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='fullName' />
            <TextInput source='mimeType' />
            <TextInput source='url' />
        </SimpleForm>
    </Create>
);