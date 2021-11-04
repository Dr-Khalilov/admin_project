import { Create, SimpleForm, TextInput } from 'react-admin';

export const TagCreate = props => (
    <Create title='Create tags' {...props}>
        <SimpleForm>
            <TextInput source='name' />
        </SimpleForm>
    </Create>
);