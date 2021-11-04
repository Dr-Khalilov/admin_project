import { Layout } from 'react-admin';
import { MenuItem } from '../MenuItem';
import { MyNotification } from '../MyNotification';
import { MyError } from '../MyError';

export const MyLayout = props => <Layout {...props} menu={MenuItem} notification={MyNotification} error={MyError} />;