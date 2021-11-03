import { Create, SimpleForm } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const PortfolioCreate = props => (
    <Create title='Create a portfolio' {...props}>
        <SimpleForm>
            <RichTextInput source='text' />
        </SimpleForm>
    </Create>
);