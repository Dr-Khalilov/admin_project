import {
    Create,
    SimpleForm,
    TextInput,
    AutocompleteArrayInput,
    ReferenceArrayInput,
} from 'react-admin';
import { CreateTag } from '../CreateTag';


export const PostCreate = props => (
    <Create title='Create a Post' {...props}>
        <SimpleForm>
            <TextInput multiline type='text' resettable source='text' />
            <ReferenceArrayInput label='Tags' source='tags' reference='tags'>
                <AutocompleteArrayInput create={<CreateTag />} />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);
