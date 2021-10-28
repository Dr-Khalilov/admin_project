import {
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    DateInput,
} from 'react-admin';

const PostTitle = ({ record }) => <span>Post {record ? `${record.id}` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            {/*<ReferenceInput source='id' reference='user'>*/}
            {/*    <SelectInput optionText='name' />*/}
            {/*</ReferenceInput>*/}
            <TextInput multiline source='text' />
            <TextInput multiline source='tags' />
        </SimpleForm>
    </Edit>
);