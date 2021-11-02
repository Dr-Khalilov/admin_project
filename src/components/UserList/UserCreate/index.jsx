import {
    Create,
    SimpleForm,
    TextInput,
    CheckboxGroupInput,
    ReferenceArrayInput,
} from 'react-admin';

export const UserCreate = props => (
    <Create title='Create an User' {...props}>
        <SimpleForm>
            <TextInput source='name' resettable />
            <TextInput type='email' source='email' resettable />
            <TextInput type='password' source='password' resettable />
            <ReferenceArrayInput reference='role' source='roles'>
                <CheckboxGroupInput source='name' />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);