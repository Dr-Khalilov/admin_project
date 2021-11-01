import {
    Create,
    SimpleForm,
    TextInput,
} from 'react-admin';

export const PortfolioCreate = props => (
    <Create title='Create a portfolio' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput multiline source='text' />
        </SimpleForm>
    </Create>
);