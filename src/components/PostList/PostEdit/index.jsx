import {
    AutocompleteArrayInput,
    Edit, ReferenceArrayInput,
    SimpleForm,
    TextInput,
} from 'react-admin';
import { CreateTag } from '../CreateTag';

const PostTitle = ({ record }) => <span>Post {record ? `${record.id}` : ''}</span>;

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput resettable multiline type='text' source='text' />
            <ReferenceArrayInput label='Tags' source='tags' reference='tags'>
                <AutocompleteArrayInput create={<CreateTag />} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Edit>
);
