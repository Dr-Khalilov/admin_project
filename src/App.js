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
import { ContactList } from './components/ContactList';
import { ContactCreate } from './components/ContactList/ContactCreate';
import { ContactEdit } from './components/ContactList/ContactEdit';
import { PortfolioList } from './components/PortfolioList';
import { PortfolioCreate } from './components/PortfolioList/PortfolioCreate';
import { PortfolioEdit } from './components/PortfolioList/PortfolioEdit';
import { MediaCreate } from './components/MediaList/MediaCreate';
import { MediaEdit } from './components/MediaList/MediaEdit';
import { RoleList } from './components/RoleList';
import { RoleEdit } from './components/RoleList/RoleEdit';
import { RoleCreate } from './components/RoleList/RoleCreate';
import { TagList } from './components/TagList';
import { TagEdit } from './components/TagList/TagEdit';
import { TagCreate } from './components/TagList/TagCreate';

export const App = () => (
    <Admin catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name='user' list={UserList} edit={UserEdit} create={UserCreate} icon={UserIcon} />
        <Resource name='contact' list={ContactList} edit={ContactEdit} create={ContactCreate} icon={UserIcon} />
        <Resource name='portfolio' list={PortfolioList} edit={PortfolioEdit} create={PortfolioCreate} />
        <Resource name='media' list={MediaList} edit={MediaEdit} create={MediaCreate} />
        <Resource name='role' list={RoleList} edit={RoleEdit} create={RoleCreate} />
        <Resource name='tags' list={TagList} edit={TagEdit} create={TagCreate} />
    </Admin>
);