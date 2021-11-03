import {
    AutocompleteArrayInput,
    Edit, ReferenceArrayInput,
    SimpleForm,
    TextInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { CreateTag } from '../CreateTag';

const PostTitle = ({ record }) => <span>Post {record ? `${record.title}` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <RichTextInput source='title' />
            <RichTextInput source='text' />
            <ReferenceArrayInput label='Tags' source='tags' reference='tags'>
                <AutocompleteArrayInput create={<CreateTag />} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
