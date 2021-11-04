import { Datagrid, DateField, DeleteButton, EditButton, List, RichTextField, TextField } from 'react-admin';

export const PortfolioList = props => (
    <List title='List of portfolios' {...props}>
        <Datagrid>
            <TextField source='id' />
            <RichTextField source='text' />
            <DateField source='created_at' />
            <DateField source='updated_at' />
            <EditButton basePath='/portfolio' />
            <DeleteButton basePath='/portfolio' />
        </Datagrid>
    </List>
);