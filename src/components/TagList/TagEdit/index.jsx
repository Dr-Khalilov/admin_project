import { Edit, SimpleForm, TextInput } from 'react-admin';

const TagTitle = ({ record }) => <span>Tag {record ? `${record.name}` : ''}</span>;

export const TagEdit = props => (
    <Edit title={<TagTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput multiline source='name' />
        </SimpleForm>
    </Edit>
);