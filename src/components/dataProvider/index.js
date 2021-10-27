import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://192.168.88.254:3002';
const httpClient = fetchUtils.fetchJson;


// const fetchJson = (url, options = {}) => {
//     options.user = {
//         authenticated: true,
//         token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIyQGdtYWlsLmNvbSIsImlkIjoiMjNhYjI3YTgtNTQ2Mi00OTAzLWE2MjYtNTI2MDhkNDJhZmFjIiwicm9sZXMiOlt7ImlkIjoiMGFhNDQ2NmEtYjYyMS00MTQxLWE4YjYtOTUxZTRkYzYwZmE1IiwiY3JlYXRlZF9hdCI6IjIwMjEtMDktMjNUMDk6MDg6NDQuNzg2WiIsInVwZGF0ZWRfYXQiOiIyMDIxLTA5LTIzVDA5OjA4OjQ0Ljc4NloiLCJuYW1lIjoidXNlciJ9XSwiaWF0IjoxNjM1MzMxMjU4LCJleHAiOjE2MzU0MTc2NTh9.kaNVkfZj8E5dfCJMt_kdf1O7LkdrvQYcWBZFqoyLNgE',
//     };
//     options.headers.set('content-range');
//     return fetchUtils.fetchJson(url, options);
// };

export const dataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    getOne: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
        data: json,
    })),

    getMany: (resource, params) => {
        const query = { filter: JSON.stringify({ id: params.ids }) };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = { filter: JSON.stringify({ id: params.ids }) };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: (resource, params) => httpClient(`${apiUrl}/${resource}`, {
        method: 'POST',
        body: JSON.stringify(params.data),
    }).then(({ json }) => ({
        data: { ...params.data, id: json.id },
    })),

    delete: (resource, params) => httpClient(`${apiUrl}/${resource}/${params.id}`, {
        method: 'DELETE',
    }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = { filter: JSON.stringify({ id: params.ids }) };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    },

};