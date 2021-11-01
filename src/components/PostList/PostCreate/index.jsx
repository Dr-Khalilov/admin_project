import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
} from 'react-admin';

export const PostCreate = props => (
    <Create title='Create a Post' {...props}>
        <SimpleForm>
            <TextInput multiline source='text' />
            <TextInput multiline source='tags' />
        </SimpleForm>
    </Create>
);