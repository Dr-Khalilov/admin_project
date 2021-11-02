import {
    List,
    Datagrid,
    TextField,
    EditButton,
    DeleteButton,
    TextInput,
    SimpleList,
    DateField,
    ArrayField, ChipField,
    SingleFieldList, ReferenceArrayField,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const postFilters = [
    <TextInput source='q' label='Search' alwaysOn />,
    <TextInput label='Text' source='text' defaultValue='Hello, World!' />,
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
                        <TextField multiline source='text' />
                        <ArrayField source='tags'>
                            <SingleFieldList>
                                <ChipField source='name' />
                            </SingleFieldList>
                        </ArrayField>
                        <DateField source='created_at' />
                        <DateField source='updated_at' />
                        <EditButton basePath='/posts' />
                        <DeleteButton basePath='/posts' />
                    </Datagrid>
                )}
        </List>
    );
};