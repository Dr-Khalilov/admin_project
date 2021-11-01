import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const RoleCreate = props => (
    <Create title='Create a role' {...props}>
        <SimpleForm>
            <TextInput source='name' />
        </SimpleForm>
    </Create>
);