import { Edit, SimpleForm, TextInput } from 'react-admin';

const RoleTitle = ({ record }) => <span>Role {record ? `${record.name}` : ''}</span>;

export const RoleEdit = props => (
    <Edit title={<RoleTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
        </SimpleForm>
    </Edit>
);