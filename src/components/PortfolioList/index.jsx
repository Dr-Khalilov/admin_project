import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    DateField,
    RichTextField,
} from 'react-admin';

export const PortfolioList = props => (
    <List {...props}>
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