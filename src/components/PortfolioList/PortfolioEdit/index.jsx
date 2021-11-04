import { Edit, SimpleForm, TextInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const PortfolioTitle = ({ record }) => <span>Portfolio {record ? `${record.id}` : ''}</span>;

export const PortfolioEdit = props => (
    <Edit title={<PortfolioTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <RichTextInput source='text' />
        </SimpleForm>
    </Edit>
);