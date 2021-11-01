import {
    List,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    DeleteButton,
    TextInput,
    ReferenceInput,
    SelectInput,
    SimpleList,
    DateField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const postFilters = [
    <TextInput source='q' label='Search' alwaysOn />,
    <ReferenceInput source='id' label='User' reference='user' allowEmpty>
        <SelectInput optionText='name' />
    </ReferenceInput>,
];

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={postFilters} {...props}>
            {
                isSmall ? (
                    <SimpleList primaryText={record => record.name}
                                secondaryText={record => record.text}
                                tertiaryText={record => record.id} />
                ) : (
                    <Datagrid>
                        <TextField source='id' />
                        <TextField source='text' />
                        <TextField source='tags' />
                        <DateField source='created_at' />
                        <DateField source='updated_at' />
                        <EditButton basePath='/posts' />
                        <DeleteButton basePath='/posts' />
                    </Datagrid>
                )}
        </List>
    );
};