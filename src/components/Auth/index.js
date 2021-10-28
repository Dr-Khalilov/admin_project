import { fetchUtils } from 'react-admin';

const { REACT_APP_API_URL } = process.env;

export const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const { token } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
};

export const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(REACT_APP_API_URL + '/auth/login',
            {
                method: 'POST',
                body: JSON.stringify({ email: username, password }),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            },
        );
        return fetch(request).then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        }).then(auth => {
            localStorage.setItem('auth', JSON.stringify({ ...auth, fullName: username }));
        }).catch(() => {
            throw new Error('Network Error');
        });
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject({ message: 'Login required' });
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: (params) => Promise.resolve(),
};