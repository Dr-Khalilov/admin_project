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
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { ListActions } from '../ListActions';

const postFilters = [
    <TextInput source='text' label='Search' alwaysOn />,
];


export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List filters={postFilters} {...props} title='List of Posts'>

            {
                isSmall ? (
                    <SimpleList primaryText={record => record.title}
                                secondaryText={record => record.name}
                                tertiaryText={record => record.text} />
                ) : (
                    <Datagrid>
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