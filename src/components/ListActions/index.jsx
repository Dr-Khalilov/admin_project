import { cloneElement } from 'react';
import { Button, CreateButton, TopToolbar, ExportButton } from 'react-admin';
import IconEvent from '@material-ui/icons/Event';

export const ListActions = (props) => (
    <TopToolbar>
        {cloneElement(props.filters, { context: 'button' })}
        <CreateButton />
        <ExportButton />
        {/* Add your custom actions */}
        <Button
            onClick={() => {
                alert('Your custom action');
            }}
            label='Show calendar'
        >
            <IconEvent />
        </Button>
    </TopToolbar>
);