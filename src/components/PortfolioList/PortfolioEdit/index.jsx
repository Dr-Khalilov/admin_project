import {
    Edit,
    SimpleForm,
    TextInput,
} from 'react-admin';

const PortfolioTitle = ({ record }) => <span>Portfolio {record ? `${record.id}` : ''}</span>;

export const PortfolioEdit = props => (
    <Edit title={<PortfolioTitle />}  {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput resettable type='text' multiline source='text' />
        </SimpleForm>
    </Edit>
);