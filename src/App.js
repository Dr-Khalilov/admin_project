import { Admin, Resource } from 'react-admin';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { authProvider } from './components/Auth';
import { dataProvider } from './components/DataProvider';
import { Dashboard } from './components/Dashboard';
import { UserList } from './components/UserList';
import { PostList } from './components/PostList';
import { PostCreate } from './components/PostList/PostCreate';
import { PostEdit } from './components/PostList/PostEdit';
import { NotFound } from './components/NotFound';
import { UserEdit } from './components/UserList/UserEdit';
import { UserCreate } from './components/UserList/UserCreate';

export const App = () => (
    <Admin catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name='user' list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
    </Admin>
);