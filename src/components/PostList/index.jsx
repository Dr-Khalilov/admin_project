import {
    ArrayField,
    ChipField,
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    List,
    Pagination,
    RichTextField,
    SearchInput,
    SingleFieldList,
    TextField,
    TextInput,
} from 'react-admin';
import { makeStyles } from '@material-ui/core';

const PostPagination = props => <Pagination rowsPerPageOptions={[10, 25, 50, 100]} {...props} />;

const PostPanel = ({ id, record, resource }) => (
    <div dangerouslySetInnerHTML={{ __html: record.text }} />
);

const postFilters = [
    <SearchInput source='q' alwaysOn />,
    <TextInput label='Title' source='title' defaultValue='' />,
    <TextInput label='Text' source='text' defaultValue='' />,
];

const useStyles = makeStyles({
    table: {
        backgroundColor: 'Lavender',
    },
    headerCell: {
        backgroundColor: 'MistyRose',
    },
});

export const PostList = (props) => {
    const classes = useStyles();
    return (
        <List filters={postFilters} {...props} pagination={<PostPagination />} title='List of Posts'>
            <Datagrid expand={<PostPanel />} classes={classes} optimized>
                <TextField source='id' />
                <RichTextField source='title' />
                <RichTextField source='text' />
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
        </List>
    );
};