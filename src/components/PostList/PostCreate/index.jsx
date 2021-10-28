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
            {/*<ReferenceInput source='id' reference='user'>*/}
            {/*    <SelectInput optionText='name' />*/}
            {/*</ReferenceInput>*/}
            <TextInput multiline source='text' />
            <TextInput source='tags' />
        </SimpleForm>
    </Create>
);