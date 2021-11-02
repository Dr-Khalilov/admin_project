import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

const ContactTitle = ({ record }) => <span>Contact {record ? `${record.name}` : ''}</span>;

export const ContactEdit = props => (
    <Edit title={<ContactTitle />}  {...props}>
        <SimpleForm>
            <TextInput source='name' resettable />
            <TextInput type='tel' resettable source='phone' />
            <TextInput type='email' resettable source='email' />
            <TextInput type='text' multiline resettable source='message' />
        </SimpleForm>
    </Edit>
);