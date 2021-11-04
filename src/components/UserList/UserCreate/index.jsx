import { CheckboxGroupInput, Create, PasswordInput, ReferenceArrayInput, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = props => (
    <Create title='Create an User' {...props}>
        <SimpleForm>
            <TextInput source='name' resettable />
            <TextInput type='email' source='email' resettable />
            <PasswordInput type='password' source='password' resettable />
            <ReferenceArrayInput reference='role' source='roles'>
                <CheckboxGroupInput source='name' />
            </ReferenceArrayInput>
        </SimpleForm>
    </Create>
);