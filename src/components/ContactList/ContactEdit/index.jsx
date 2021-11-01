import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

const ContactTitle = ({ record }) => <span>Contact {record ? `${record.name}` : ''}</span>;

export const ContactEdit = props => (
    <Edit title={<ContactTitle />}  {...props}>
        <SimpleForm>
            <TextInput source='name' />
            <TextInput source='phone' />
            <TextInput source='email' />
            <TextInput source='message' />
        </SimpleForm>
    </Edit>
);