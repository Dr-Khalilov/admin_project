import PropTypes from 'prop-types';
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
    SingleFieldList,
    RichTextField,
    SearchInput, Pagination,
} from 'react-admin';
import { useMediaQuery, makeStyles } from '@material-ui/core';

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
    row: {
        backgroundColor: '#ccc',
    },
});

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const classes = useStyles();
    return (
        <List filters={postFilters} {...props} pagination={<PostPagination />} title='List of Posts'>

            {
                isSmall ? (
                    <SimpleList primaryText={record => record.title}
                                secondaryText={record => record.name}
                                tertiaryText={record => record.text} />
                ) : (
                    <Datagrid expand={<PostPanel />} classes={{ row: classes.row }} optimized>
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
                )}
        </List>
    );
};

// PostList.propTypes = {
//     props: PostList.,
// };