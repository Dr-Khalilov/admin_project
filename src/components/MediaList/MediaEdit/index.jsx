import { Edit, SimpleForm, TextInput } from 'react-admin';

const MediaTitle = ({ record }) => <span>Media {record ? `${record.name}` : ''}</span>;

export const MediaEdit = props => (
    <Edit title={<MediaTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput source='name' />
            <TextInput source='fullName' />
            <TextInput source='mimeType' />
            <TextInput source='url' />
        </SimpleForm>
    </Edit>
);