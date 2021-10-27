import {
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const PostCreate = props => (
    <Create title='Create a Post' {...props}>
        <SimpleForm>
            <ReferenceInput source='userId' reference='users'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='title' />
            <TextInput multiline source='body' />
        </SimpleForm>
    </Create>
);