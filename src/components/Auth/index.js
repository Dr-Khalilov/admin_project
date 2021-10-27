const { REACT_APP_API_URL } = process.env;

export const httpClient = () => {
    const { token } = JSON.parse(localStorage.getItem('auth')) || {};
    return { Authorization: `Bearer ${token}` };
};

export const authProvider = {
    login: ({ username, password }) => {
        const request = new Request(REACT_APP_API_URL + '/user/login',
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
        }).catch(() => throw new Error('Network Error'));
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
            const { id, fullName } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: (params) => Promise.resolve(),
};