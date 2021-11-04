import { Admin, Resource } from 'react-admin';
import { authProvider } from './components/Auth';
import { dataProvider } from './components/DataProvider';
import { Dashboard } from './components/Dashboard';
import { NotFound } from './components/NotFound';
import { PostList } from './components/PostList';
import { PostCreate } from './components/PostList/PostCreate';
import { PostEdit } from './components/PostList/PostEdit';
import { UserList } from './components/UserList';
import { UserCreate } from './components/UserList/UserCreate';
import { UserEdit } from './components/UserList/UserEdit';
import { ContactList } from './components/ContactList';
import { ContactCreate } from './components/ContactList/ContactCreate';
import { ContactEdit } from './components/ContactList/ContactEdit';
import { PortfolioList } from './components/PortfolioList';
import { PortfolioCreate } from './components/PortfolioList/PortfolioCreate';
import { PortfolioEdit } from './components/PortfolioList/PortfolioEdit';
import { MediaList } from './components/MediaList';
import { MediaCreate } from './components/MediaList/MediaCreate';
import { MediaEdit } from './components/MediaList/MediaEdit';
import { RoleList } from './components/RoleList';
import { RoleEdit } from './components/RoleList/RoleEdit';
import { RoleCreate } from './components/RoleList/RoleCreate';
import { TagList } from './components/TagList';
import { TagCreate } from './components/TagList/TagCreate';
import { TagEdit } from './components/TagList/TagEdit';
import { MyLayout } from './components/MyLayout';
import { MyLoginPage } from './components/MyLoginPage';
import { MyLogoutButton } from './components/MyLogoutButton';
import { theme } from './components/Themes';


export const App = () => (
    <Admin theme={theme} loginPage={MyLoginPage} logoutButton={MyLogoutButton} layout={MyLayout}
           catchAll={NotFound}
           dashboard={Dashboard}
           authProvider={authProvider}
           dataProvider={dataProvider}>
        <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
        <Resource name='user' list={UserList} edit={UserEdit} create={UserCreate} />
        <Resource name='contact' list={ContactList} edit={ContactEdit} create={ContactCreate} />
        <Resource name='portfolio' list={PortfolioList} edit={PortfolioEdit} create={PortfolioCreate} />
        <Resource name='media' list={MediaList} edit={MediaEdit} create={MediaCreate} />
        <Resource name='role' list={RoleList} edit={RoleEdit} create={RoleCreate} />
        <Resource name='tags' list={TagList} edit={TagEdit} create={TagCreate} />
    </Admin>
);
