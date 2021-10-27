import React from 'react';
import {
    List,
    Datagrid,
    ReferenceField,
    TextField,
    EditButton,
    TextInput,
    ReferenceInput,
    SelectInput,
    SimpleList,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const postFilters = [
    <TextInput source='q' label='Search' alwaysOn />,
    <ReferenceInput source='userId' label='User' reference='users' allowEmpty>
        <SelectInput optionText='name' />
    </ReferenceInput>,
];

export const PostList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List filters={postFilters} {...props}>
            {
                isSmall ? (
                    <SimpleList primaryText={record => record.title}
                                secondaryText={record => `${record.views} views`}
                                tertiaryText={record => new Date(record.published_at).toLocaleDateString()} />
                ) : (
                    <Datagrid>
                        <TextField source='id' />
                        <ReferenceField label='User' reference='users' source='userId'>
                            <TextField source='name' />
                        </ReferenceField>
                        <TextField source='title' />
                        <EditButton />
                    </Datagrid>
                )}
        </List>
    );
};