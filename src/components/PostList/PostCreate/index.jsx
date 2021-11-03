import {
    Create,
    SimpleForm,
    AutocompleteArrayInput,
    ReferenceArrayInput,
} from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import { CreateTag } from '../CreateTag';


export const PostCreate = props => (
    <Create title='Create a Post' {...props}>
        <SimpleForm>
            <RichTextInput source='title' />
            <RichTextInput source='text' />
            <ReferenceArrayInput label='Tags' source='tags' reference='tags'>
                <AutocompleteArrayInput create={<CreateTag />} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
