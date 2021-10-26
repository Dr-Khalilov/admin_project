import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
export const App = () => <Admin dataProvider={dataProvider} />;
