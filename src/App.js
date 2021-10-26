import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './components/UserList';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} />
    </Admin>
);